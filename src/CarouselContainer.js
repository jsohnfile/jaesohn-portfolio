import makeCarousel from 'react-reveal/makeCarousel';
import LightSpeed from 'react-reveal/LightSpeed';
import styled, { css } from 'styled-components';
import "./CarouselContainer.css";

import React from 'react'

function CarouselContainer() {
    const width = '800px', height='200px';
    const Container = styled.div`
      position: relative;
      overflow: hidden;
      width: ${width};
    `;
    const Children  = styled.div`
      width: ${width};
      position: relative;
      height: ${height};
    `;

    const CarouselUI = ({ children }) => (
      <Container>
        <Children>
          {children}
        </Children>
      </Container>
    );
    const Carousel = makeCarousel(CarouselUI);
    return (
        <div className="carouselContainer">
            <h2 className="carouselContainer__iam">Hello! I'm</h2>
            <Carousel defaultWait={2000} >
                <LightSpeed right>
                <div>
                    <p className="carouselContainer__title">Jae Sohn</p>
                </div>
                </LightSpeed>
                <LightSpeed right>
                <div>
                    <p className="carouselContainer__title">A Front End Developer</p>
                </div>
                </LightSpeed>
                <LightSpeed right>
                <div>
                    <p className="carouselContainer__title">A Full Stack Developer</p>
                </div>
                </LightSpeed>
                <LightSpeed right>
                <div>
                    <p className="carouselContainer__title">A Freelance Developer</p>
                </div>
                </LightSpeed>
            </Carousel>
            
        </div>
    )
}

export default CarouselContainer;