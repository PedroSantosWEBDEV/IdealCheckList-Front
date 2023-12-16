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
    data: number[]
}

const ChartsWidget10: React.FC<Props> = ({chartColor, chartHeight = '200px',data}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight,data))
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

export {ChartsWidget10}

const chartOptions = (chartColor: string, chartHeight: string,data:number[]): ApexOptions => {
    const baseColor = getCSSVariableValue('--kt-' + chartColor)
    return {
      series: [
        {
          name: 'name',
          data: data,
        }
      ],
      chart: {
        fontFamily: 'inherit',
        width: '100px',
        height: chartHeight,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
        width: 1
      },
      markers: {
        size: 0
      },
      tooltip: {
        fixed: {
          enabled: false,
          position: 'left'
        },
        x: {
          show: false
        }
      },
      
      colors: [baseColor],
    }
  }
