import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../CSS/menu.css'; // Custom CSS for styling

const MyCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={5000}
                stopOnHover
                swipeable
                dynamicHeight
                showArrows
            >
                <div>
                    <img src="img/logo.jpeg" alt="Slide 1" />
                    <div className="legend">
                        <h3>SREBRENITSA</h3>
                        <p>Description for Slide 1</p>
                    </div>
                </div>
                <div>
                    <img src="img/logo.jpeg" alt="Slide 2" />
                    <div className="legend">
                        <h3>Slide 2</h3>
                        <p>Description for Slide 2</p>
                    </div>
                </div>
                <div>
                    <img src="img/logo.jpeg" alt="Slide 2" />
                    <div className="legend">
                        <h3>Nassın</h3>
                        <p>Selam</p>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Carousel>
        </div>
    );
};

export default MyCarousel;
