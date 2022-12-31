import React from 'react';
import placeholderImg from '../../../assets/carousel/asset1.jpg'
import PrimaryButton from '../../Buttons/PrimaryButton';


const ProductCard = (props) => {
    return (
        <div className="container__product-card col-12 col-md-4 m-3">
            <img src={props.cardImg ? props.cardImg : placeholderImg} alt="logo" />
            <h4>{props.cardTitle}</h4>
            <p className="text-center">{props.cardDescription}</p>
            <PrimaryButton variant='secondary' text='+ Añadir al carrito' customCss='text-light'/>

        </div>
    );
};

export default ProductCard;
