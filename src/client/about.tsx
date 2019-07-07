// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";

import Fade from 'react-reveal/Fade'

let main = () => {
    ReactDOM.render(aboutPage, document.getElementById("about-content"));
};

const aboutPage = <div className="centered-container">
            <div className="profile-container">
                <Fade left><img className="profile" src="images/jpg/steve-photo.jpg" alt="profile"></img></Fade>
                    <div className="profile-text-container">
                    <div>
                        <Fade right><h1 className="exclamation-1">Hi!</h1></Fade>
                        <Fade right delay={500}><h1 className="exclamation-2">Hey!</h1></Fade>
                        <Fade right delay={1000}><h1 className="exclamation-3">Hello!</h1></Fade>
                    </div>
                    <div className="profile-text">
                        <Fade delay={1200}><h2>My name is Mason</h2>
                        <h3>As a student of studio art and computer science, I 
                        search for meaningful ways to marry the two fields in my 
                        work.</h3></Fade><br></br>
                    </div>
                    </div>
            </div>
            <Fade right><img className="page-break" src="images/svg/page-break.svg"></img></Fade>
            <div className="text-container"> 
                <Fade left><h2>Education</h2></Fade>
                <Fade right><p>When I was in high school, Calculus BC caused me so much grief that I intentionally left over 3/4 
                    of the AP Exam blank out of spite, instead filling up the space intended for FRQs with sentimental 
                    letters about motivation and life-purpose for the graders. I got a 1 out of 5 and silently vowed, “Never again.”</p>
                    <p>I registered for my first semester of classNamees as a declared Studio Art major, opting a smorgasbord of 
                    humanities classNamees to assuage my vitriol towards STEM. At my mother’s urging, I begrudgingly dropped “Contemporary English” 
                    for ”Introduction to Programming”. <em>The rest of my college experience is history, except for that it was computer science.</em></p></Fade>
            </div>
            <div className="image-container">
                <Fade left><img className="about-page-image" src="images/jpg/hackathon-image.jpg"></img>
                <div className="image-caption-container">
                    <div className="image-caption"><p><em>Helping students at the semesterly hackathon: HACK110</em></p></div>
                </div></Fade>
            </div>
            <Fade right><img className="page-break" src="images/svg/page-break.svg"></img></Fade>
            <div className="text-container"> 
                <Fade left><h2>Art</h2></Fade>
                <Fade right><p>I never gave up art as a practice when I began pursuing computer science. Finishing studio work continues to bring as much joy
                     as seeing a project run with no errors.</p></Fade>
            </div>
            <Fade left><div className="image-container image-container-reverse">
                <img className="about-page-image" src="images/jpg/studio.jpg"></img>
                    <div className="image-caption-container">
                        <div className="image-caption"><p><em>Preparing submissions for the AP Art exam</em></p></div>
                    </div>
            </div></Fade>
            <Fade right><img className="page-break" src="images/svg/page-break.svg"></img></Fade>
            <div className="text-container">
                <Fade left><h2>Teaching</h2></Fade>
                <Fade right><p><em>Over the past four years, my life was changed by two bald men in their thirties.</em></p>
                <p>Gabriel Lovejoy taught me studio art for in high school and instilled in me a deep appreciation for art history and conceptual integrity. 
                    Kris Jordan was my first computer science professor and taught me that STEM need not be intimidating.</p>
                <p><em>Inspired by my mentors, I’ve made teaching an integral aspect of my education.</em></p>
                <p>I was an undergraduate teaching assistant for Professor Jordan’s “Introduction to Programming” className for five semesters, helping students 
                    in office hours and teaching review sessions of up to a hundred students. As a TA, I’ve worked with countless humanities students who fell in love with computer science, 
                    just like me. I’m currently a UTA for a className intended for CS majors: "Computer Organization" with Professor Singh. For two semesters I volunteered in Chapel Hill public 
                    middle schools teaching art history in after-school care as a member of the club Art&Life. </p> </Fade>
            </div>
            <Fade left><div className="image-container">
                <img className="about-page-image" src="images/jpg/lecture.jpg"></img>
                    <div className="image-caption-container">
                        <div className="image-caption"><p><em>Teaching the final exam review session for COMP101</em></p></div>
                    </div>
            </div></Fade>
            <Fade right><img className="page-break" src="images/svg/page-break.svg"></img></Fade>
            <div className="text-container"> 
                <Fade><h2>Relevant Coursework</h2></Fade>
                <div className="coursework">
                <Fade left><div className="course-list">
                <p><em>Mathematics and Physics</em></p>
                <ul>
                    <li>Calculus of a Single Variable I, II</li>
                    <li>Calculus of Multiple Variables</li>
                    <li>Linear Algebra</li>
                    <li>Mechanics and Relativity</li>
                </ul>
            </div></Fade>
            <Fade><div className="course-list">
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
            </div></Fade>
            <Fade right><div className="course-list">
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
            </div></Fade>
        </div>
        </div>
        <Fade left><div className="image-container image-container-reverse">
            <img className="about-page-image" src="images/jpg/triangles.jpg"></img>
                <div className="image-caption-container">
                    <div className="image-caption"><p><em>The results of teaching seventh graders a lesson on "Math and Art": here are
                    their renderings of the Sierpinski Triangle.</em></p></div>
                </div>
        </div></Fade>
        <Fade right><img className="page-break" src="images/svg/page-break.svg"></img></Fade>
        <div className="about-links-container"> 
            <Fade bottom><img className="about-link" src="images/svg/resume-label.svg"></img></Fade>
            <Fade bottom delay={500}><img className="about-link" src="images/svg/linkedin-label.svg"></img></Fade>
            <Fade bottom delay={1000}><img className="about-link" src="images/svg/transcript-label.svg"></img></Fade>
        </div> 
        </div>;

window.addEventListener("load", main);
