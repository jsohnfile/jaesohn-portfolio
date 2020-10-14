import React from "react";
import "./About.css";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Fade from "react-reveal/Fade";

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
                        <p>Thank you for dropping by. I am a Full-Stack developer, seeking a career where I can utilize my skill sets 
                        gained throughout my past experiences. Similar to the way my name sounds(Jae Sohn == json), my understanding of 
                        business operations has given me the knowledge to communicate between different departments and colleagues in an 
                        efficient and cohesive manner.
                        </p>
                        <h3>Skills</h3>
                        <p>HTML, CSS, JavaScript, JQuery, Python, Mongoose, Vanilla JS, Express JS, PostgresSQL, OAuth, AWS, Firebase, JWT, MongoDB, ReactJS, Git, Github, and Agile/SCRUM, and learning more!.
                        Feel free to message me, or add me on Linked-In.
                        </p>
                        <h3>Contact Me</h3>
                        <div className="about__contact">
                            <a href="mailto:jsohnfile@gmail.com" target="_blank"><EmailTwoToneIcon className="about__contactIcon"/></a>
                            <a href="https://www.github.com/jsohnfile" target="_blank"><GitHubIcon className="about__contactIcon"/></a>
                            <a href="https://www.linkedin.com/in/jaesohn" target="_blank"><LinkedInIcon className="about__contactIcon"/></a>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default About
