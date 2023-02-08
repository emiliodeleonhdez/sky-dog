import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PaymentOk = () => {
    
    const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center not-found__container">
    <FontAwesomeIcon icon={faShieldDog} onClick={() => navigate('/')} />
    <h2 className="text-center">Wuuf!</h2>
    <h6 className="text-center">Wuuuuuuuuuuf! - Nos vemos pronto, gracias por comprar con nosotros</h6>
    <p className="text-center">Tú perrito es lo más importante para nosotros y queremos crecer juntoss</p>
</div>
  )
}

export default PaymentOk