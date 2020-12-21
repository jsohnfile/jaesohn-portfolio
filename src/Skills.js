import React from "react";
import "./Skills.css";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"
import Fade from "react-reveal/Fade";
import { Parallax } from "react-scroll-parallax";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiNodeDotJs, SiReact, SiMongodb, SiAmazonaws, SiFirebase, SiPostgresql, SiGit, SiGithub, SiDjango, SiAngularjs } from "react-icons/si"
function Skills() {
    return (
        <div className="skills">
            <a id="skills">
            <div className="skills__subContainer">
                <Fade top>
                    <div className="skills__text">
                        <Parallax y={[0, -50]}>
                        <h3>Technologies</h3>
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
                        </Parallax> 
                        <Parallax y={[0,-50]}>

                        <h3>Contact Me</h3>
                        <div className="skills__contact">
                            <a href="mailto:jsohnfile@gmail.com" target="_blank" title="Email Me"><EmailOutlined style={{fontSize:'40px'}} className="about__contactIcon"/></a>
                            <a href="https://www.github.com/jsohnfile" target="_blank" title="GitHub"><GitHubIcon style={{fontSize:'40px'}}  className="about__contactIcon"/></a>
                            <a href="https://www.linkedin.com/in/jaesohn" target="_blank" title="LinkedIn"><LinkedInIcon style={{fontSize:'40px'}}  className="about__contactIcon"/></a>
                            <a href="https://docs.google.com/document/d/1Ct0s_fd66HzVxcWiXmQAB6RqflwLMhkcQPHduVbhqTI/edit?usp=sharing" target="_blank" title="Resume"><InsertDriveFileIcon style={{fontSize: '40px'}} className="about__contactIcon"/></a>
                        </div>
                                                    
                        </Parallax>
                    </div>
                </Fade>
            </div>
            </a>

        </div>
    )
}

export default Skills;
