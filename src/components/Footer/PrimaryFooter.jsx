import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const PrimaryFooter = () => {
    return (
        <>
            <div className="footer__social-media d-flex justify-content-center align-items-center">
                <div className="footer__social-media-icons container">
                    <div className="row justify-content-center">
                        <FontAwesomeIcon className='col-3' icon={faFacebook} onClick={() => alert('yes')} />
                        <FontAwesomeIcon className='col-3' icon={faInstagram} onClick={() => alert('yes')} />
                        <FontAwesomeIcon  className='col-3' icon={faWhatsapp} onClick={() => alert('yes')} />
                        <div className="col footer__copy-right text-center mt-3">
                            Sky Dog | Educación Canina ®
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrimaryFooter;
