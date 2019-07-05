// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";


// 2. Import our Data
import data from "./script/data"

import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade'

let main = () => {
    ReactDOM.render(aboutPage, document.getElementById("about-container"));
    console.log("yo");
};


const aboutPage = <div className="about">
        <div className="nav-bar-mobile">
            <div className="nav-row-mobile">
                <a className="nav-button-mobile" href="portfolio.html"><img src="./images/svg/portfolio-label_black_linear.svg"></img></a>
                <a className="nav-button-mobile" href="code.html"><img src="./images/svg/code-label_black_linear.svg"></img></a>
            </div>
            <div className="nav-row-mobile">
                <a className="nav-button-mobile" href="about.html"><img src="./images/svg/about-label_black_linear.svg"></img></a>
                <a className="nav-button-mobile" href="writing.html"><img src="./images/svg/writing-label_black_linear.svg"></img></a>
            </div>
        </div>
        <div id="header" className="header">
        <div className="nav">
            <img className="nav-button-image" src="./images/svg/about-button.svg" alt="about-button"></img>
            <div className="nav-bar">
                    <img className="circular-nav-button" src="./images/svg/portfolio-nav-button_white.svg"></img>
                    <a href="portfolio.html?header=visible"><img className="nav-button" src="./images/svg/portfolio-label_white.svg"></img></a>
                    <a href="code.html?header=visible"><img className="nav-button" src="./images/svg/code-label_white.svg"></img></a>
                    <a href="writing.html?header=visible"><img className="nav-button" src="./images/svg/writing-label_white.svg"></img></a>
                    <a href="about.html?header=visible"><img className="nav-button" src="./images/svg/about-label_white.svg"></img></a>
            </div>
        </div>
        <a className="name-button" href="landing-page.html">
            <img className="name-button-image name-button-image-black" src="./images/svg/mason-mathew-black.svg" alt="mason-mathew"></img>
            <img className="name-button-image name-button-image-white" src="./images/svg/mason-mathew-white.svg" alt="mason-mathew"></img>
        </a>
        </div>
        <div className="container">
            <div className="centered-container">
            <div className="profile-container">
                    <img className="profile" src="images/jpg/steve-photo.jpg" alt="profile"></img>
                    <div className="profile-text-container">
                    <div>
                        <h1 className="exclamation-1">Hi!</h1>
                        <h1 className="exclamation-2">Hey!</h1>
                        <h1 className="exclamation-3">Hello!</h1>
                    </div>
                    <div className="profile-text">
                        <h2>My name is Mason</h2>
                        <h3>As a student of studio art and computer science, I 
                        search for meaningul ways to marry the two fields in my 
                        work.</h3><br></br>
                    </div>
                    </div>
            </div>
            <img className="page-break" src="images/svg/page-break.svg"></img>
            <div className="text-container"> 
                <h2>Education</h2>
                <p>When I was in high school, Calculus BC caused me so much grief that I intentionally left over 3/4 
                    of the AP Exam blank out of spite, instead filling up the space intended for FRQs with sentimental 
                    letters about motivation and life-purpose for the graders. I got a 1 out of 5 and silently vowed, “Never again.” </p>
                <p> I registered for my first semester of classNamees as a declared Studio Art major, opting a smorgasbord of 
                    humanities classNamees to assuage my vitriol towards STEM. At my mother’s urging, I begrudgingly dropped “Contemporary English” 
                    for ”Introduction to Programming”. <em>The rest of my college experience is history, except for that it was computer science.</em></p>
            </div>
            <div className="image-container">
                <img className="about-page-image" src="images/jpg/hackathon-image.jpg"></img>
                <div className="image-caption-container">
                    <div className="image-caption"><p><em>Helping students at the semesterly hackathon: HACK110</em></p></div>
                </div>
            </div>
            <img className="page-break" src="images/svg/page-break.svg"></img>
            <div className="text-container"> 
                <h2>Art</h2>
                <p>I never gave up art as a practice when I began pursuing computer science. Finishing studio work continues to bring as much joy
                     as seeing a project run with no errors.</p>
            </div>
            <div className="image-container image-container-reverse">
                <img className="about-page-image" src="images/jpg/studio.jpg"></img>
                    <div className="image-caption-container">
                        <div className="image-caption"><p><em>In my makeshift studio during high school</em></p></div>
                    </div>
            </div>
            <img className="page-break" src="images/svg/page-break.svg"></img>
            <div className="text-container"> 
                <h2>Teaching</h2>
                <p><em>Over the past four years, my life was changed by two bald men in their thirties.</em></p>
                <p>Gabriel Lovejoy taught me studio art for in high school and instilled in me a deep appreciation for art history and conceptual integrity. 
                    Kris Jordan was my first computer science professor and taught me that STEM need not be intimidating.</p>
                <p><em>Inspired by my mentors, I’ve made teaching an integral aspect of my education.</em></p>
                <p>I was an undergraduate teaching assistant for Professor Jordan’s “Introduction to Programming” className for five semesters, helping students 
                    in office hours and teaching review sessions of up to a hundred students. As a TA, I’ve worked with countless humanities students who fell in love with computer science, 
                    just like me. I’m currently a UTA for a className intended for CS majors: "Computer Organization" with Professor Singh. For two semesters I volunteered in Chapel Hill public 
                    middle schools teaching art history in after-school care as a member of the club Art&Life. </p>
            </div>
            <div className="image-container">
                <img className="about-page-image" src="images/jpg/lecture.jpg"></img>
                    <div className="image-caption-container">
                        <div className="image-caption"><p><em>Teaching the final exam review session for COMP101</em></p></div>
                    </div>
            </div>
            <img className="page-break" src="images/svg/page-break.svg"></img>
            <div className="text-container"> 
                <h2>Relevant Coursework</h2>
                <div className="coursework">
                <div className="course-list">
                <p><em>Mathematics and Physics</em></p>
                <ul>
                    <li>Calculus of a Single Variable I, II</li>
                    <li>Calculus of Multiple Variables</li>
                    <li>Linear Algebra</li>
                    <li>Mechanics and Relativity</li>
                </ul>
            </div>
            <div className="course-list">
                <p><em>Computer Science</em></p>
                <ul>
                    <li>Discrete Structures</li>
                    <li>Data Structures</li>
                    <li>Computer Organization</li>
                    <li>Algorithms and Analysis</li>
                    <li>Finite Automata </li>
                    <li>Programming Language Concepts</li>
                    <li>Modern Web Development</li>
                    <li>Internet Services and Protocols</li>
                    <li>2D Graphics</li>
                    <li>Computer Security</li>
                </ul>
            </div>
            <div className="course-list">
                <p><em>Studio Art and Art History</em></p>
                <ul>
                    <li>2D Design</li>
                    <li>3D Design</li>
                    <li>Video Art I</li>
                    <li>Photography I</li>
                    <li>Drawing I</li>
                    <li>Screen Printing</li>
                    <li>History of Western Art I</li>
                    <li>Latin American Modernisms</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="image-container image-container-reverse">
            <img className="about-page-image" src="images/jpg/triangles.jpg"></img>
                <div className="image-caption-container">
                    <div className="image-caption"><p><em>The results of teaching seventh graders a lesson on "Math and Art": here are
                    their renderings of the Sierpinski Triangle.</em></p></div>
                </div>
        </div>
        <img className="page-break" src="images/svg/page-break.svg"></img>
        <div className="about-links-container"> 
            <img className="about-link" src="images/svg/resume-label.svg"></img>
            <img className="about-link" src="images/svg/linkedin-label.svg"></img>
            <img className="about-link" src="images/svg/transcript-label.svg"></img>
        </div> 
        </div>
        </div>
        </div>;

window.addEventListener("load", main);
