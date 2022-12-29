import React from 'react'
import placeholderImg from '../../../assets/carousel/asset1.jpg'

const LandingCard = (props) => {
  return (
    <div className='landing__card col-12 col-md-4 m-3'>
        <img src={props.cardImg ? props.cardImg : placeholderImg} alt="logo" />
        <h4>{props.cardTitle}</h4>
        <p className='text-center'>{props.cardDescription}</p>
        <a href='www.google.com'>!Quiero más información!</a>
    </div>
  )
}

export default LandingCard