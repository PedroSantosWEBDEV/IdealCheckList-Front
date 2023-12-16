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

const ChartsWidget12: React.FC<Props> = ({chartHeight = '250px', data}) => {
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
      <div ref={chartRef} className="bg-secondary" id='kt_charts_widget_1_chart' />
      {/* end::Chart */}
    </>
  )
}

export {ChartsWidget12}

const chartOptions = (chartHeight: string, data: number[]): ApexOptions => {
  return {
    series: [
      {
        name: 'Fluxo de Caixa em Abril 01/04/2023',
        data: [1635312.34, 542250, 590000, 420000, 1200000.6, 1800000.1, 1800000.2],
      },
      {
        name: 'Previsão de saída',
        data: [200357.66, 54225, 590000, 420000, 1200000.6, 1800000.1, 1800000.2],
      },
    ],
    chart: {
      height: chartHeight,
      stacked: true,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    legend: {
      labels: {
        colors: '#111',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return 'R$' + val.toLocaleString()
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#111'],
      },
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
      type: 'datetime',
      categories: [
        '2023-04-01',
        '2023-04-05',
        '2023-04-10',
        '2023-04-15',
        '2023-04-20',
        '2023-04-25',
        '2023-04-29',
      ],
      labels: {
        style: {
          colors: '#111',
        },
      },
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return 'R$' + val.toLocaleString()
        },
      },
    },
  }
}
