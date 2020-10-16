import React from "react";
import "./Header.css"
import { Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { motion } from "framer-motion";


function Header() {
    return (
        <div className="header">
            <div className="header__nameContainer">
                <Avatar className="header__avatar" src="https://i.imgur.com/EZfpfTB.jpg"/>
                <h2>Jae Sohn</h2>
            </div>
            <div className="header__contactIcons">
            <motion.a whileHover={{scale:1.2}} href="https://www.github.com/jsohnfile" target="_blank" title="GitHub"><GitHubIcon className="header__icon"/></motion.a>
            <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/jaesohn" target="_blank" title="Linked-In"><LinkedInIcon className="header__icon"/></motion.a>
            </div>
            
        </div>
    )
}

export default Header
