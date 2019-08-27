// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import Header from './header';
import Fade from 'react-reveal/Fade'
import code from "./script/code";

type Page = {
    id: number,
    title: string, 
    body: string, 
    link: string
}
 
type CodePageTemplateProps = {
    pages: Page[]
}

type CodePageTemplateState = {
    title: string
}

let main = () => {
    ReactDOM.render(<CodePageTemplate pages={code}/>, document.getElementById("code-container"));
};

class CodePageTemplate extends React.Component<CodePageTemplateProps, CodePageTemplateState>{
    constructor(props) {
        super(props);

        this.state = {
           title: this.props.pages[0].title
        };
        
    }

    render() {
        return <Fade bottom><div className="centered-container code-text">
                    <h2>{this.props.pages[1].title}</h2>
                    <p>{this.props.pages[1].body.split("/").map((element) => {
                        return element + <br></br>;
                    })}</p>
                    <br></br>
                    <p><strong><em>Link to Github: </em></strong><a href={this.props.pages[1].link} target="_blank">Racket Sort</a></p>
                    <div className="code-arrow-container">
                        <a className="white-arrow" href="code"><img src="images/svg/white-arrow.svg"></img></a>
                    </div>
        </div></Fade>
    }
}


window.addEventListener("load", main);


