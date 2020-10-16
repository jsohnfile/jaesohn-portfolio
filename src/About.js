import React from "react";
import "./About.css";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fade from "react-reveal/Fade";
import { SiHtml5, SiCss3, SiReact, SiJavascript, SiPython, SiFirebase, SiMongodb, SiPostgresql, SiAmazonaws, SiGithub } from "react-icons/si";

function About() {
    return (
        <div className="about">
            <div className="about__subContainer">
                <Fade left>
                    <img className="about__image" src="https://i.imgur.com/DD5zPty.jpg" alt="" />
                </Fade>
                <Fade right>
                    <div className="about__text">
                        <h1>About Me</h1>
                        <p>Thank you for dropping by. I am a Full-Stack developer, seeking an opportunity where I can utilize my skill sets 
                        gained throughout my past experiences. I have a passion for building, and utilizing my creative skills in order to produce beautiful and efficient web apps.
                        </p>
                        <h3>Skills</h3>
                        <p><SiHtml5 style={{ fontSize: '30px'}} className="about__icon" title="HTML 5"/>, <SiCss3 style={{ fontSize: '30px'}} className="about__icon" title="CSS 3"/>, <SiJavascript style={{ fontSize: '30px'}} className="about__icon" title="JavaScript"/>, <SiReact style={{ fontSize:'30px'}} className="about__icon" title="React JS"/>, <SiPython style={{ fontSize:'30px'}} className="about__icon" title="Python"/>, <SiFirebase style={{ fontSize: '30px'}} className="about__icon" title="Google Firebase"/>, <SiMongodb style={{ fontSize: '30px'}} className="about__icon" title="MongoDB"/>, <SiPostgresql style={{ fontSize: '30px'}} className="about__icon" title="postgreSQL"/>, <SiAmazonaws style={{ fontSize: '30px'}} className="about__icon" title="AWS"/>, <SiGithub style={{ fontSize: '30px'}} className="about__icon" title="Github"/> JSON Web Tokens(JWT), jQuery, Vanilla JS, Express JS, PostgresSQL, Google OAuth, Agile/SCRUM, and learning more!.
                        Feel free to email me, or add me on LinkedIn.
                        </p>
                        <h3>Contact Me</h3>
                        <div className="about__contact">
                            <a href="mailto:jsohnfile@gmail.com" target="_blank" title="Email Me"><EmailOutlined style={{fontSize:'40px'}} className="about__contactIcon"/></a>
                            <a href="https://www.github.com/jsohnfile" target="_blank" title="GitHub"><GitHubIcon style={{fontSize:'40px'}}  className="about__contactIcon"/></a>
                            <a href="https://www.linkedin.com/in/jaesohn" target="_blank" title="Linked-In"><LinkedInIcon style={{fontSize:'40px'}}  className="about__contactIcon"/></a>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default About
