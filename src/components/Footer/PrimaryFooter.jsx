import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logos/Primary Logo/Logo";

const PrimaryFooter = () => {
  return (
    <>
      <section className="footer__social-media container-fluid pt-3 pb-3">
        <div className="row">
        <article className="footer__logo col-12 col-lg-9 d-flex justify-content-center justify-content-lg-start">
          <Logo customClass={"logo__sky-dog--small"} isWhite={true} />
        </article>
        <article className="footer__social-media-icons d-flex align-items-center justify-content-evenly col-12 col-lg-3">
          <FontAwesomeIcon className="foooter__icon--white" icon={faFacebook} />
            <a href="https://www.instagram.com/skydogeducacioncanina/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            className="foooter__icon--white"
            icon={faInstagram}
          />
            </a>
          <FontAwesomeIcon className="foooter__icon--white" icon={faTwitter} />
          <FontAwesomeIcon className="foooter__icon--white" icon={faSpotify} />
        </article>
        </div>
      </section>
    </>
  );
};

export default PrimaryFooter;
