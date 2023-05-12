import React from 'react';
import PrimaryForm from '../../components/Form/PrimaryForm';
import loginArt from '../../assets/illustrations/sapiens-converted.svg';

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="login__form-container col col-md-6 d-flex flex-column justify-content-center my-5">
                    <PrimaryForm primaryLabel="Correo electrónico" primaryLabelPlaceHolder="Correo electrónico" secondaryLabel="Contraseña" secondaryLabelPlaceHolder="Contraseña" text="Login" customCss="login__form-button"/>
                </div>
                <div className="login__welcome-img col col-md-6 d-none d-md-block">
                    <img src={loginArt} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Login;
