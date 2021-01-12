import React, { useState, useEffect } from 'react'
import { Fade } from "react-reveal";
import { AiFillDownCircle } from "react-icons/ai";
import "./Header.css"

function Header() {
    const [displayTwo, setDisplayTwo] = useState(['header__title__container__off']);
    const [displayThree, setDisplayThree] = useState(['header__title__container__off']);
    const [displayFour, setDisplayFour] = useState(['header__title__container__off']);
    const [displayBtn, setDisplayBtn] = useState(['header__btn__off'])
    
    useEffect(()=> {
        setTimeout(
            () => setDisplayTwo(['header__title__container__on']),
            1000
        )
        setTimeout(
            () => setDisplayThree(['header__title__container__on']),
            2000
        )
        setTimeout(
            () => setDisplayFour(['header__title__container__on']),
            3000
        )
        setTimeout(
            () => setDisplayBtn(['header__btn__on']),
            4000
        )

    })
        return (
            <div className="header">
                <Fade right>
                <div className="header__title__container__on">
                    <div className="header__title"><span className="header__letter">F</span>r<span className="header__letter">o</span>ntend Dev</div>
                    <div className="dot__container">
                        <div className="dot"></div>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className={displayTwo}>
                    <div className="header__title">Fu<span className="header__letter">ll</span>stack Dev</div>
                    <div className="dot__container">
                        <div className="dot"></div>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className={displayThree}>
                    <div className="header__title">S<span className="header__letter">o</span>ftware Engineer</div>
                    <div className="dot__container">
                        <div className="dot"></div>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className={displayFour}>
                    <div className="header__title"><span className="header__letter">W</span>eb Dev</div>
                    <div className="dot__container">
                        <div className="dot"></div>
                    </div>
                </div>
                </Fade>
                <Fade bottom>
                    <div className={displayBtn}>
                        <div className="learn">Learn More</div>
                        <a href="#projects"><AiFillDownCircle className="header__btn"/></a>
                    </div>
                </Fade>
            </div>
        )
    }


export default Header

