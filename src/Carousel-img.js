import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel width="100px">
                <div>
                    <img src="http://127.0.0.1:3333/images/1d3d81c0890a4810584e9420bbbc4224.jpg" />
                </div>
                <div>
                    <img src="http://127.0.0.1:3333/images/22e80ef9c4b77325686ff3af7e34a093.jpg" />
                </div>
                <div>
                    <img src="http://127.0.0.1:3333/images/emodmg.png" />
                </div>
            </Carousel>
        </div>
    );
}