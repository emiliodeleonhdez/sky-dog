import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import carouselPic1 from '../../assets/carousel/asset1.jpg';
import carouselPic2 from '../../assets/carousel/asset2.jpg';
import carouselPic3 from '../../assets/carousel/asset3.jpg';
import carouselPic4 from '../../assets/carousel/asset4.jpg';

const PrimaryCarousel = () => {
    return (
        <>
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={carouselPic1} alt="logo" />
                </div>
                <div>
                    <img src={carouselPic2} alt="logo" />
                </div>
                <div>
                    <img src={carouselPic3} alt="logo" />
                </div>
                <div>
                    <img src={carouselPic4} alt="logo" />
                </div>
            </Carousel>
        </>
    );
};

export default PrimaryCarousel;
