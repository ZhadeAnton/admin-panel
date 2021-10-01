import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { ICarFromDB } from '../../interfaces/carInterfaces'
import { getCarImage } from '../../utils/carUtils'

interface Props {
  cars: Array<ICarFromDB>
}

export default function CarsList(props: Props) {
  const data = []

  console.log(props.cars)

  for (let i = 0; i < props.cars.length; i++) {
    data.push({
      key: i,
      image: <img
        src={getCarImage(props.cars[0].thumbnail.path)}
        alt="Car"
        width={180}
        height={70}
      />,
      name: props.cars[i].name,
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
      width: 60,
      fixed: true,
    },
    {
      title: 'Название',
      dataIndex: 'name',
      width: 80,
      fixed: true,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      width: 40,
      fixed: true,
    },
    {
      title: 'Мин. Цена',
      dataIndex: 'priceMin',
      width: 40,
      fixed: true,
    },
    {
      title: 'Макс. Цена',
      dataIndex: 'priceMax',
      width: 40,
      fixed: true,
    },
    {
      title: 'Номер',
      dataIndex: 'number',
      width: 40,
      fixed: true,
    }
  ]

  const handleClickByRow = () => {
    console.log('hi')
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{cursor: 'pointer'}}
      bordered={false}
      scroll={{ x: 900 }}
      sticky
      onRow={(record) => {
        return {
          onClick: () => handleClickByRow()
        }
      }}
    />
  )
}
