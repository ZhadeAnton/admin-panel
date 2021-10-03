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
      key: props.cars[i].id,
      id: props.cars[i].id,
      name: props.cars[i].name,
      type: props.cars[i].categoryId?.name,
      priceMin: props.cars[i].priceMin,
      priceMax: props.cars[i].priceMax,
      number: props.cars[i].number,
      categoryId: props.cars[i].categoryId,
      colors: props.cars[i].colors,
      description: props.cars[i].description,
      thumbnail: props.cars[i].thumbnail
    })
  }

  const columns = [
    {
      title: 'Картинка',
      dataIndex: 'thumbnail',
      width: carImageColumn,
      fixed: true,
      key: 'Картинка',
      render: (data: ICarFromDB['thumbnail']) => (
        <img
          width={carImageWidth}
          height={carImageHeight}
          alt='car'
          src={getCarImage(data.path)}
        />)
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
