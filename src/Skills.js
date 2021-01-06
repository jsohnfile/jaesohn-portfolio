import React from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiNodeDotJs, SiReact, SiMongodb, SiAmazonaws, SiFirebase, SiPostgresql, SiGit, SiGithub, SiDjango, SiAngularjs } from "react-icons/si"
function Skills() {
    return (
        <div className="skills" id="technologies">
            <a id="skills"></a>
            <div className="skills__subContainer">
                <Fade bottom>
                    <div className="skills__text">
                        <h3>Techn<span className="skills__span">o</span>logies</h3>
                        <div className="skills__container">
                            <div className="skills__logo__container">
                                <SiHtml5 className="skills__logo"/>
                                <p className="skills__name">HTML</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiCss3 className="skills__logo"/>
                                <p className="skills__name">CSS</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiJavascript className="skills__logo"/>
                                <p className="skills__name">JavaScript</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiPython className="skills__logo"/>
                                <p className="skills__name">Python</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiNodeDotJs className="skills__logo"/>
                                <p className="skills__name">Node JS</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiReact className="skills__logo"/>
                                <p className="skills__name">React JS</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiAngularjs className="skills__logo"/>
                                <p className="skills__name">Angular JS</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiMongodb className="skills__logo"/>
                                <p className="skills__name">MongoDB</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiDjango className="skills__logo"/>
                                <p className="skills__name">Django</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiAmazonaws className="skills__logo"/>
                                <p className="skills__name">AWS</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiFirebase className="skills__logo"/>
                                <p className="skills__name">Firebase</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiPostgresql className="skills__logo"/>
                                <p className="skills__name">PostgreSQL</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiGit className="skills__logo"/>
                                <p className="skills__name">Git</p>
                            </div>
                            <div className="skills__logo__container">
                                <SiGithub className="skills__logo"/>
                                <p className="skills__name">GitHub</p>
                            </div>

                        </div>
                    </div>
                </Fade>
            </div>


        </div>
    )
}

export default Skills;
