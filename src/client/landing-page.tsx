// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import { Fade } from "react-reveal";
import AboutPage from "./about";
import {
    Route,
    NavLink,
    BrowserRouter, 
    Switch
} from "react-router-dom";

import {
    TransitionGroup, 
    CSSTransition
  } from "react-transition-group";

let main = () => {
    ReactDOM.render(<LandingPage/>, document.getElementById("landing-page-container"));
};

type LandingPageState = {
    chosenColor: string
    pageLoaded: boolean
}

type LandingPageProps = {

}

class LandingPage extends React.Component<LandingPageProps, LandingPageState>{
    constructor(props) {
        super(props);

        this.state = {
            chosenColor: "none",
            pageLoaded: true
        };
    }
    
    render() {
        return <div className="landing-page">
                <Fade right><div className="name-design-container">
                    <img className="name-design plain" src="./images/svg/plain-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design white" src="./images/svg/white-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design yellow" src="./images/svg/yellow-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design blue" src="./images/svg/blue-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design red" src="./images/svg/red-design.svg" alt="Mason Mathew"></img>
                </div></Fade>
                <Fade left><div className="nav-grid-container">
                    <div className="nav-grid">
                        <div className="nav-row nav-row-top">
                        <a href="portfolio" className="grid-item grid-item_portfolio" onMouseOver={() => this.onHover("plain",  "white")}
                                onMouseOut={() => this.onHover("white",  "plain")}>
                            <div>
                                <img className="grid-image" src="./images/svg/portfolio-button_label.svg" alt="portfolio-button"></img> 
                            </div>
                        </a>
                        <a href="code" className="grid-item grid-item_code" onMouseOver={()=>this.onHover("plain",  "yellow")}
                            onMouseOut={()=>this.onHover("yellow",  "plain")}>
                        <div>
                            <img className="grid-image" src="./images/svg/code-button_label.svg" alt="code-button"></img>
                        </div>
                        </a>
                        </div>
                        <div className="nav-row nav-row-bottom">
                        <a href="writing" className="grid-item grid-item_writing" onMouseOver={()=>this.onHover("plain",  "blue")}
                                onMouseOut={()=>this.onHover("blue",  "plain")}>
                            <div>
                                <img className="grid-image" src="./images/svg/writing-button_label.svg" alt="writing-button"></img>
                            </div>
                        </a>
                        <a href="about" className="grid-item grid-item_about" onMouseOver={()=>this.onHover("plain",  "red")}
                            onMouseOut={()=>this.onHover("red",  "plain")}>
                            <div>
                                <img className="grid-image" src="./images/svg/about-button_label.svg" alt="about-button"></img>
                            </div>
                        </a>
                        </div>
                    </div>
                </div></Fade>
                </div>
        }

    onHover(hide: string, show: string) {
        const hideElement = document.getElementsByClassName(hide)[0] as HTMLElement;
        const showElement = document.getElementsByClassName(show)[0] as HTMLElement;
        
        hideElement.style.display = "none";
        showElement.style.display = "block";
    };
}


window.addEventListener("load", main);

export default LandingPage;