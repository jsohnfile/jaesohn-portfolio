import React from "react";
import Project from "./Project";
import "./Portfolio.css";
import Flip from "react-reveal/Flip";

function Portfolio() {
    return (
        <div className="portfolio" id="projects">
                <div className="portfolio__projectContainer">
                
                    <div className="portfolio__project" >
                        <p className="portfolio__header"><span className="portfolio__header__span">M</span>y Projects</p>
                        <Flip left cascade>
                        <div className="portfolio__container">
                            <div className="portfolio__projectWrapper">
                            <Project glink="https://github.com/jsohnfile/Slot-Machine-Game" plink="https://jsohnfile.github.io/Slot-Machine-Game" image="https://i.imgur.com/6i5gkFk.png" title="Slot Machine Game" textOne="The Slot Machine Game was the first front-end project I have ever created." textTwo="Technologies Used: HTML, CSS, JavaScript, Vanilla JS"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                            <Project glink="https://github.com/jsohnfile/react-project" plink="https://twitter-clone-d7a9a.web.app/" image="https://i.imgur.com/q8ohIcS.png" title="Twitter Clone" textOne="This is a simple Twitter Clone to imitate the features displayed on the offical Twitter page" textTwo="Technologies Used: HTML, CSS, JavaScript, ReactJS, Material UI, Firebase"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                                <Project glink="https://github.com/jsohnfile/slack-clone" plink="https://slack-clone-eb04e.web.app/" image="https://i.imgur.com/fFTtk22.png" title="Slack Clone" textOne="This is a simple Slack Clone with full Chat functionality" textTwo="Technologies Used: HTML, CSS, JavaScript, ReactJS, Material UI, Firebase, Google OAuth"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                                <Project glink="https://github.com/jsohnfile/amazon-clone" plink="https://clone-89684.web.app/" image="https://i.imgur.com/9PSahuC.png" title="Amazon Clone" textOne="This is a clone of the famous Amazon site with full order functionalities, including Stripe checkout!" textTwo="Technologies Used: HTML, CSS, JavaScript, ReactJS, Material UI, Firebase, Stripe API"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                                <Project glink="https://github.com/jsohnfile/sharecipe-app" plink="https://sharecipe-recipeshare.herokuapp.com" image="https://i.imgur.com/9g9zvuS.jpg" title="Sharecipe" textOne="Having a passion for cooking and testing out new recipes, this app was developed to give users the ability to create, share, and favorite reipes with users of the Sharecipe Community" textTwo="Technologies Used: HTML, CSS, JavaScript, NodeJS, ExpressJS, Mongoose/MongoDB, EJS"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                                <Project glink="https://github.com/jsohnfile/shoecollector" plink="https://shoecollector.herokuapp.com" image="https://i.imgur.com/JzDlhcY.png" title="Shoecollector" textOne="The Shoecollector app is a Full-Stack web app using Python. This web app allows a user to store their favorite snaker/shoe on the app and keeps logs of pricing and websites that currently sell them" textTwo="Technologies Used: HTML, CSS, Python, Materialize, PostgreSQL, Django"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                                <Project glink="https://github.com/jsohnfile/issues-that-matter" plink="https://issues-that-matter.herokuapp.com" image="https://i.imgur.com/b90SnEs.png" title="Issues That Matter" textOne="With so much going on in this world right now, there seemed to be too much fake-news and unreliable resources out there. As a team, we built Issues That Matter as a place to store resources of topics that matter without having to deal with all the clutter" textTwo="Technologies Used: HTML, CSS, Python, Django, OpenGraph"/>
                            </div>
                            <div className="portfolio__projectWrapper">
                                <Project glink="https://github.com/jsohnfile/trackpaks" plink="https://trackpaks.herokuapp.com" image="https://i.imgur.com/pUqNFCI.png" title="Trackpaks" textOne="Ever had to track a package? What about multiple packages? I always hoped for a site that made it easier to keep track of all packages and the tracking history across many different carriers. That is why TrackPaks was created" textTwo="Technologies Used: HTML, CSS, JavaScript, Mongoose/MongoDB, ExpressJS, ReactJS, NodeJS, Shippo API"/>
                            </div>
                        </div>
                    </Flip>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio

