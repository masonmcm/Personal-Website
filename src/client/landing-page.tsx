// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import { Fade } from "react-reveal";

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
                            <div className="grid-item grid-item_portfolio" onMouseOver={() => this.onHover("plain",  "white")}
                                onMouseOut={() => this.onHover("white",  "plain")}>
                                <a href="portfolio">
                                <img className="grid-image" src="./images/svg/portfolio-button_label.svg" alt="portfolio-button"></img>
                                </a>
                            </div>
                        <div className="grid-item grid-item_code" onMouseOver={()=>this.onHover("plain",  "yellow")}
                            onMouseOut={()=>this.onHover("yellow",  "plain")}>
                            <a href="code">
                            <img className="grid-image" src="./images/svg/code-button_label.svg" alt="code-button"></img>
                            </a>
                        </div>
                        </div>
                        <div className="nav-row nav-row-bottom">
                            <div className="grid-item grid-item_writing" onMouseOver={()=>this.onHover("plain",  "blue")}
                                onMouseOut={()=>this.onHover("blue",  "plain")}>
                                <a href="writing">
                                <img className="grid-image" src="./images/svg/writing-button_label.svg" alt="writing-button"></img>
                                </a>
                            </div>
                            <div className="grid-item grid-item_about" onMouseOver={()=>this.onHover("plain",  "red")}
                            onMouseOut={()=>this.onHover("red",  "plain")}>
                                <a href="about">
                                <img className="grid-image" src="./images/svg/about-button_label.svg" alt="about-button"></img>
                                </a>    
                            </div>
                        </div>
                    </div></Fade>
                </div>
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
