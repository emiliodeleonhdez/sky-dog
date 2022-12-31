import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappButton = () => {
    const whatsAppLink = 'https://wa.me/525525066350?text=¡Hola!%20Me%20gustaría%20recibir%20más%20informes%20';
    return (
        <>
            <div className="button__whats-app-button d-flex flex-column justify-content-center align-items-center">
                <a href={whatsAppLink} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp}  />
                </a>
            </div>
        </>
    );
};

export default WhatsappButton;
