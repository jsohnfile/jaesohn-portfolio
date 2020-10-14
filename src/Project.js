import React from "react";
import "./Project.css";
import Modal from "./Modal";
import { motion } from "framer-motion"

function Project({ projectLink, image, title, textOne, textTwo, glink, plink }) {
    return (
        <motion.div whileHover={{scale: 1.1}} className="project">
                <div className="project__container">
                    <Modal image={image} projectLink={projectLink} title={title} textOne={textOne} textTwo={textTwo} glink={glink} plink={plink}/>
                </div>
        </motion.div>
    )
}

export default Project
