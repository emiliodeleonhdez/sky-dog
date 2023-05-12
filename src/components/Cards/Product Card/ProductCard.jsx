import React from 'react';
// import { useEffect } from 'react';
import placeholderImg from '../../../assets/carousel/asset1.jpg'
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import axios from 'axios';
import Loader from '../../Loader/SkyDogLoader';
import { useState } from 'react';


const api_url ="http://localhost:8000"

const ProductCard = (props) => {

    const [loader, setLoader] = useState(false)

    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "MXN",
                    value: 0.00
                }
            }
        ],
        application_context: {
            brand_name: "Sky-Dog | Educación Canina",
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url: "http://localhost:8000/payments/execute-payment",
            cancel_url: "http://localhost:8000/payments/cancel-payment"
        }
    }

    const handleBuy = async (price) => {
        order.purchase_units[0].amount.value = price
        const setOrder = await axios.post(`${api_url}/payments/create-order`, order)
        if(!setOrder){
            setLoader(true)
        }
        setLoader(false)
        const approveLink = setOrder.data.payload.links.find(link => link.rel==="approve")
        window.location.replace(`${approveLink.href}`)
    }
    
    return (
        <div className="container__product-card col-12 col-md-4 m-3">
            {loader ? <Loader/> : ""}
            <img src={props.cardImg ? props.cardImg : placeholderImg} alt="logo" />
            <h4>{props.cardTitle}</h4>
            <p className="text-center">{props.cardDescription}</p>
            <p className='text-primary fs-4'>${props.price}</p>
            <PrimaryButton variant='secondary' text='Comprar para mi perrito' customCss='text-light' action={()=> handleBuy(props.price)}/>
        </div>
    );
};

export default ProductCard;
