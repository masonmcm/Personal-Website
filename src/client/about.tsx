// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';
import Header from './header';
import ScrollToTop from "react-scroll-up";



let main = () => {
ReactDOM.render(<AboutPage/>, document.getElementById("about-container"));
};

class AboutPage extends React.Component {

        render() { 
        return <div className="about-content">
            <ScrollToTop showUnder={160}>
                <img id="fixed-arrow" className="fixed-arrow" src="./images/svg/white-arrow.svg"></img>
            </ScrollToTop>
            <div className="about-center-container">
            <div className="centered-container">
            <div className="profile-container">
            <Fade left><img className="profile" src="images/jpg/steve-photo.jpg" alt="profile"></img></Fade>
                    <div className="profile-text-container">
                        <Fade right><em><h1 className="exclamation-1">Hi!</h1></em></Fade>
                        <Fade right delay={500}><em><h1 className="exclamation-2">Hey!</h1></em></Fade>
                        <Fade right delay={1000}><em><h1 className="exclamation-3">Hello!</h1></em></Fade>
                    <div className="profile-text">
                        <Fade right delay={1200}><h2>My name is Mason</h2>
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
            <Fade left><div className="image-container">
                <img className="about-page-image" src="images/jpg/hackathon-image.jpg"></img>
                <div className="image-caption-container">
                    <div className="image-caption"><p><em>Helping students at the semesterly hackathon: HACK110</em></p></div>
                </div>
            </div></Fade>
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
                    middle schools teaching art history in after-school care as a member of the club Art&Life. </p></Fade>
            </div>
            <Fade left><div className="image-container">
                <img className="about-page-image" src="images/jpg/lecture.jpg"></img>
                    <div className="image-caption-container">
                        <div className="image-caption"><p><em>Teaching the final exam review session for COMP101</em></p></div>
                    </div>
            </div></Fade>
            <Fade right><img className="page-break" src="images/svg/page-break.svg"></img></Fade>
            <div className="text-container"> 
                <h2>Relevant Coursework</h2>
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
           <Fade bottom><h2>Resume</h2></Fade>
           <Fade bottom delay={500}><h2>Transcript</h2></Fade>
           <Fade bottom delay={1000}><h2>LinkedIn</h2></Fade>
        </div> 
        </div>
        </div>
        </div>
        };
}


window.addEventListener("load", main);