// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Fade } from "react-reveal";

let main = () => {
    ReactDOM.render(<Header/>, document.getElementById("header-container"));
};

type HeaderState = {
    navHidden: boolean
}

type HeaderProps = {

}

class Header extends React.Component<HeaderProps, HeaderState>{
    constructor(props) {
        super(props);

        this.state = {
            navHidden: true
        };
    }
    
    render() {
    return <div id="header" className="header" onMouseLeave={() => this.setState({navHidden: true})}>
        <div className="nav-flex">
        <div className="nav">
            <Fade left when={this.state.navHidden}><img className="nav-button-image" src="images/svg/portfolio-button.svg" alt="about-button" onMouseEnter={() => this.setState({navHidden: false})}></img></Fade>
                <Fade left when={!this.state.navHidden}><div className="nav-bar">
                    <img className="circular-nav-button" src="./images/svg/circular-nav-button_black.svg"></img>
                    <a href="portfolio?header=visible"><img className="nav-button" src="./images/svg/portfolio-label_black_slant.svg"></img></a>
                    <a href="code?header=visible"><img className="nav-button" src="./images/svg/code-label_black_slant.svg"></img></a>
                    <a href="writing?header=visible"><img className="nav-button" src="./images/svg/writing-label_black_slant.svg"></img></a>
                    <a href="about?header=visible"><img className="nav-button" src="./images/svg/about-label_black_slant.svg"></img></a>
            </div></Fade>
    </div>
    </div>
    <a className="name-button" href="/">
        <img className="name-button-image name-button-image-black" src="./images/svg/mason-mathew-black.svg" alt="mason-mathew"></img>
    </a>
    </div>}
}


window.addEventListener("load", main);