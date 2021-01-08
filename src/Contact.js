import React from 'react'
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Fade from "react-reveal/Fade";
import "./Contact.css";

function Contact(){
    return (
        <Fade bottom>
            <div className="contact" id="contact">
                <h3>Co<span className="contact__span">n</span>tact Me</h3>
                    <div className="contact__container">
                        <a href="mailto:jsohnfile@gmail.com" target="_blank" title="Email Me"><EmailOutlined style={{fontSize:'40px'}} className="contact__icon"/></a>
                        <a href="https://www.github.com/jsohnfile" target="_blank" title="GitHub"><GitHubIcon style={{fontSize:'40px'}}  className="contact__icon"/></a>
                        <a href="https://www.linkedin.com/in/jaesohn" target="_blank" title="LinkedIn"><LinkedInIcon style={{fontSize:'40px'}}  className="contact__icon"/></a>
                        <a href="https://docs.google.com/document/d/1Ct0s_fd66HzVxcWiXmQAB6RqflwLMhkcQPHduVbhqTI/edit?usp=sharing" target="_blank" title="Resume"><InsertDriveFileIcon style={{fontSize: '40px'}} className="contact__icon"/></a>
                    </div>
            </div>
        </Fade>
    )
}

export default Contact
