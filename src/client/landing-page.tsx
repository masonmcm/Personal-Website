// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import { Fade } from "react-reveal";

let main = () => {
    ReactDOM.render(<LandingPage/>, document.getElementById("landing-page-container"));
};

let load = () => {
    loaded = true;
}

let unload = () => {
    loaded = false;
}

let loaded = true;

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
                <Fade right delay={100}><div className="name-design-container">
                    <img className="name-design plain" src="./images/svg/plain-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design white" src="./images/svg/white-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design yellow" src="./images/svg/yellow-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design blue" src="./images/svg/blue-design.svg" alt="Mason Mathew"></img>
                    <img className="name-design red" src="./images/svg/red-design.svg" alt="Mason Mathew"></img>
                </div></Fade>
                <div className="nav-grid-container">
                    <Fade left delay={100}><div className="nav-grid">
                        <div className="nav-row nav-row-top">
                            <div className="grid-item grid-item_portfolio">
                                <a href="portfolio.html">
                                <img className="grid-image" src="./images/svg/portfolio-button_label.svg" alt="portfolio-button"></img>
                                </a>
                            </div>
                        <div className="grid-item grid-item_code">
                            <a href="code.html">
                            <img className="grid-image" src="./images/svg/code-button_label.svg" alt="code-button"></img>
                            </a>
                        </div>
                        </div>
                        <div className="nav-row nav-row-bottom">
                            <div className="grid-item grid-item_writing">
                                <a href="writing.html">
                                <img className="grid-image" src="./images/svg/writing-button_label.svg" alt="writing-button"></img>
                                </a>
                            </div>
                            <div className="grid-item grid-item_about">
                                <a href="about.html">
                                <img className="grid-image" src="./images/svg/about-button_label.svg" alt="about-button"></img>
                                </a>    
                            </div>
                        </div>
                    </div></Fade>
                </div>
            </div>
        }
}


window.addEventListener("load", load);
window.addEventListener("onunload", unload);
window.addEventListener("load", main);
