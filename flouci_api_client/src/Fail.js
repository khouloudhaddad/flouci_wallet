import React from 'react'

function Fail() {
  return (
    <div className='p-4'>
      <div role="alert" className="alert alert-danger">
        <span>Payment failure.</span>
      </div>
    </div>
  )
}

export default Fail