import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center not-found__container">
            <FontAwesomeIcon icon={faShieldDog} onClick={() => navigate('/')} />
            <h6 className="text-center">404 - Not found</h6>
            <h2 className="text-center">Wuuf!</h2>
            <p className="text-center">Estamos trabajando muy duro para traer más servicios para ti y para tú perrito</p>
        </div>
    );
};

export default NotFound;
