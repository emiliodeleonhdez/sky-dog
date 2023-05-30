import React from 'react'

const Recomendation = (props) => {
    const {owner, review} = props
  return (
    <div className='p-3 my-3 mx-md-3 bg-secondary rounded recomendation__card d-flex flex-column align-items-center justify-content-center'>
        <div className="p-3">
        <h3 className='text-center'>{owner}</h3>
        <p className='text-center'>{review}</p>
        </div>
    </div>
  )
}

export default Recomendation