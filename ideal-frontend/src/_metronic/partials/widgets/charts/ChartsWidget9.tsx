/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
    chartColor: string
    chartHeight?: string
    percentage: number
}

const ChartsWidget9: React.FC<Props> = ({chartColor, chartHeight = '200px', percentage}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight, percentage))
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

export {ChartsWidget9}

const chartOptions = (chartColor: string, chartHeight: string, percentage: number): ApexOptions => {
    chartColor = percentage <= 100 ? chartColor : 'danger'
    const baseColor = getCSSVariableValue('--kt-' + chartColor)
    const lightColor = getCSSVariableValue('--kt-' + chartColor + '-light')
    const labelColor = getCSSVariableValue('--kt-gray-700')
  
    return {
      series: [percentage],
      chart: {
        fontFamily: 'inherit',
        height: chartHeight,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '65%',
          },
          dataLabels: {
            name: {
              show: false,
              fontWeight: '700',
            },
            value: {
              color: labelColor,
              fontSize: '30px',
              fontWeight: '700',
              offsetY: 12,
              show: true,
              formatter: function (val) {
                return val + '%'
              },
            },
          },
          track: {
            background: lightColor,
            strokeWidth: '100%',
          },
        },
      },
      colors: [baseColor],
      stroke: {
        lineCap: 'round',
      },
      labels: ['Progress'],
    }
  }
