import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { ICarFromDB } from '../../interfaces/carInterfaces'
import { getCarImage } from '../../utils/carUtils'
import { useAppDispatch } from '../../hooks/usePreTypedHooks'
import { setEditableCarItem } from '../../redux/carSetting/carActionCreators'

interface Props {
  cars: Array<ICarFromDB>
}

export default function CarsList(props: Props) {
  const dispatch = useAppDispatch()
  const windowDimension = useWindowDimensions()
  const carImageWidth = windowDimension.width < 640 ? 80 : 110
  const carImageHeight = windowDimension.width < 640 ? 40 : 50
  const carImageColumn = windowDimension.width < 640 ? 6 : 10
  const data: Array<any> = []

  for (let i = 0; i < props.cars.length; i++) {
    data.push({
      key: i,
      image: <img
        src={getCarImage(props.cars[0].thumbnail.path)}
        alt="Car"
        width={carImageWidth}
        height={carImageHeight}
      />,
      id: props.cars[i].id,
      name: props.cars[i].name,
      isFullTank: props.cars[i].isFullTank,
      isNeedChildChair: props.cars[i].isNeedChildChair,
      type: props.cars[i].categoryId?.name,
      priceMin: props.cars[i].priceMin,
      priceMax: props.cars[i].priceMax,
      number: props.cars[i].number,
    })
  }

  const columns = [
    {
      title: 'Картинка',
      dataIndex: 'image',
      width: carImageColumn,
      fixed: true,
      key: 'Картинка'
    },
    {
      title: 'Название',
      dataIndex: 'name',
      width: 15,
      key: 'Название'
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      width: 10,
      key: 'Тип'
    },
    {
      title: 'Мин. Цена',
      dataIndex: 'priceMin',
      width: 10,
      key: 'Мин'
    },
    {
      title: 'Макс. Цена',
      dataIndex: 'priceMax',
      width: 10,
      key: 'Макс'
    },
    {
      title: 'Номер',
      dataIndex: 'number',
      width: 10,
      key: 'Номер'
    }
  ]

  const handleClickByRow = (record: ICarFromDB) => {
    const carItem = data.filter((item) => item.id === record.id)[0]
    dispatch(setEditableCarItem(carItem as unknown as ICarFromDB))
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{cursor: 'pointer'}}
      bordered={false}
      pagination={false}
      scroll={{x: 900}}
      sticky
      onRow={(record) => {
        return {
          onClick: () => handleClickByRow(record)
        }
      }}
    />
  )
}
