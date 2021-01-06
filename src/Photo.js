import React, { PureComponent } from 'react';
import Fade from "react-reveal/Fade";
import "./Photo.css"

export class Photo extends PureComponent {
    render() {
        return (
            <div className="photo" id="photo">
                <Fade left>
                <div className="photo__container">
                    <img className="photo__image" src="https://i.imgur.com/EZfpfTB.jpg" alt="Jae Sohn Photo" />
                    <p className="photo__name">Jae Sohn</p>
                </div>
                </Fade>
                
                <Fade right>
                    <div className="photo__about">
                        <p className="about__title">About <span className="about__title__span">M</span>e</p>
                        <p className="about__text">Thank you for dropping by. I am a Full-Stack developer, seeking an opportunity where I can utilize my skill sets 
                        gained throughout my past experiences. I have a passion for building, and utilizing my creative skills in order to produce beautiful and efficient web apps.
                        </p>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default Photo
