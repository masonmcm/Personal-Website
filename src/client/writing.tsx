import * as React from "react";
import ReactDOM from "react-dom";
import Header from './header';
import Fade from 'react-reveal/Fade'

let main = () => {
    ReactDOM.render(writingPage, document.getElementById("writing-container"));
};

const writingPage = <div className="code-content"><Fade bottom delay={100}><div className="writing-and-code-links">
                    <a href="writing-1"><h2>Offerings</h2></a>
                    <a href="writing-2"><h2>The Mill</h2></a>
                    <a href="writing-3"><h2>The Unexpected Virtue of Ignorance</h2></a>
                </div></Fade></div>;


window.addEventListener("load", main);

