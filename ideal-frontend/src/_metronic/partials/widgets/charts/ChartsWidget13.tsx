/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  chartHeight?: string
  data: number[]
}

const ChartsWidget13: React.FC<Props> = ({chartHeight = '250px', data}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartHeight, data))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode])

  return (
    <>
      {/* begin::Chart */}
      <div ref={chartRef} id='kt_charts_widget_1_chart' />
      {/* end::Chart */}
    </>
  )
}

export {ChartsWidget13}

const chartOptions = (chartHeight: string, data: number[]): ApexOptions => {
  return {
    series: [{
      data: [72, 71, 69, 62]},
    ],
    chart: {
      height: chartHeight,
      stacked: true,
      type: 'bar',
      toolbar:{
        show: false
      }
    },
    grid:{
    show: true,
    strokeDashArray: 4,
    xaxis:{
    lines:{
    show: true
    }
    },
    yaxis:{
      lines:{
      show: false
      }
      },
    },
    plotOptions: {
      bar: {
        barHeight: '60%',
        borderRadius: 4,
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
          
        },
      
      },
    },
    colors: ['#7239ea','#009ef7','#ffc700','#50cd89'],
    legend: {
      show: false
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      formatter: function (val) {
        return val + ''
      },
      offsetY: 0,
    },
    responsive: [
      {
        breakpoint: 300,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      type: 'category',
      categories: ['Angher', 'Aleva', 'Unimed', 'Take'],
      
    },
    yaxis: {
      labels: {
        show: true
      }
      
    },
  }
}
