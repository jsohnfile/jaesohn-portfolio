import React from "react";
import "./Header.css"
import { Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


function Header() {
    return (
        <div className="header">
            <div className="header__nameContainer">
                <Avatar className="header__avatar" src="https://i.imgur.com/EZfpfTB.jpg"/>
                <h2>Jae Sohn</h2>
            </div>
            <div className="header__contactIcons">
            <a href="https://www.github.com/jsohnfile" target="_blank"><GitHubIcon className="header__icon"/></a>
            <a href="https://www.linkedin.com/in/jaesohn" target="_blank"><LinkedInIcon className="header__icon"/></a>
            </div>
            
        </div>
    )
}

export default Header
