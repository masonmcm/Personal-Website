// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";

import Fade from 'react-reveal/Fade'

let main = () => {
    ReactDOM.render(codePage, document.getElementById("code-container"));
};

const codePage = <Fade bottom delay={100}><div className="writing-and-code-links">
                    <a href="code-1"><h2><em>Insertion Sort</em> in Scheme</h2></a>
                    <h2><em>iOS Application</em> in Swift</h2>
                    <h2><em>Personal Website</em> in TypeScript</h2>
                </div></Fade>;


window.addEventListener("load", main);


