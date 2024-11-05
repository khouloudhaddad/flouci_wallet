import React from 'react'

function fail() {
  return (
    <div className='p-4'>
      <div role="alert" className="alert alert-danger">
        <span>Payment failure.</span>
      </div>
    </div>
  )
}

export default fail