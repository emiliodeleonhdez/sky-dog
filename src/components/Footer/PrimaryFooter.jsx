import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const PrimaryFooter = () => {
    return (
        <>
            <div className="footer__social-media d-flex justify-content-center align-items-center flex-column">
                <div className="footer__social-media-icons">
                    <FontAwesomeIcon icon={faFacebook} onClick={() => alert('yes')} />
                    <FontAwesomeIcon icon={faInstagram} onClick={() => alert('yes')} />
                    <FontAwesomeIcon icon={faWhatsapp} onClick={() => alert('yes')} />
                </div>
                <div className="footer__copy-right text-center mt-3">Sky Dog | Educación Canina ®</div>
            </div>
        </>
    );
};

export default PrimaryFooter;
