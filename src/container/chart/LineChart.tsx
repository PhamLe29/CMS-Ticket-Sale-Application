import React, { FC } from 'react'
import { Area } from '@ant-design/plots'

const LineChart: FC = () => {

  const dataValue = [
    { day: 'Thứ 2', value: 150000000 },
    { day: 'Thứ 3', value: 220000000 },
    { day: 'Thứ 4', value: 160000000 },
    { day: 'Thứ 5', value: 250000000 },
    { day: 'Thứ 6', value: 280000000 },
    { day: 'Thứ 7', value: 180000000 },
    { day: 'CN', value: 190000000 },
  ]

  const config = {
    data: dataValue,
    xField: 'day',
    yField: 'value',
    color: '#FAA05F',
    xAxis: {
      range: [0, 1],
    },
    yAxis: {
      range: [0, 1],
    },
    areaStyle: {
      fill: 'l(270) 0:#ffffff 1:#FAA05F',
    },
    smooth: true,
  }

  return <Area {...config} />
}

export default LineChart
