import React from 'react'
import '../Styles/spinner.css'

export function LoadingSpinner() {
  return (
    <div className='center'>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  )
}
