// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import Header from './header';
import Fade from 'react-reveal/Fade'

let main = () => {
    ReactDOM.render(codePage, document.getElementById("code-container"));
};

const codePage = <div className="code-content"><Fade bottom delay={100}><div className="writing-and-code-links">
                    <a href="code-1"><h2><em>Racket Sort</em> in Racket</h2></a>
                    <a href="code-2"><h2><em>Functional Medicine App</em> in Swift</h2></a>
                    <a href="code-3"><h2><em>Personal Website</em> in TypeScript</h2></a>
                </div></Fade></div>;


window.addEventListener("load", main);


