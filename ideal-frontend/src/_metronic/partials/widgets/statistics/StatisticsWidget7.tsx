/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  color: string
  description: string
  progress: string
}

const StatisticsWidget7: React.FC<Props> = ({className, color, description, progress}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body my-3 px-5'>
        <span className={`card-title text-gray-600 fs-5 mb-3 d-block`}>
          {description}
        </span>
      
        <div className='py-1'>
          <span className='text-dark fs-1 fw-bold me-2'>{progress}</span>
        </div>

        <div className={`progress h-7px bg-${color} bg-opacity-50 mt-5`}>
          <div
            className={`progress-bar bg-${color}`}
            role='progressbar'
            style={{width: progress}}
          />
        </div>
      </div>
      {/* end:: Body */}
    </div>
  )
}

export {StatisticsWidget7}
