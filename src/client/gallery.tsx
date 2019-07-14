// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";


// 2. Import our Data
import data from "./script/data"
import Fade from 'react-reveal/Fade'
import { CSSTransition } from 'react-transition-group';
import './styles.css';

let main = () => {
    window.addEventListener("scroll", function() {

    forms.forEach((form) => { 
        let formThumbnails = document.getElementsByClassName(form + "-thumbnail");
        let first = formThumbnails[0] as HTMLElement;
        let last = formThumbnails[formThumbnails.length - 1] as HTMLElement;

        if(formThumbnails.length !== 0) {
            if(first !== null && last !== null){
                formsRecord[form] = ((window.scrollY > first.offsetTop - 300) &&
                (window.scrollY < last.offsetTop - 300) ? true : false);
            }
        }
    });


    for(let i = 0; i < forms.length; i++) {
        if(formsRecord[forms[i]] === true){
            this.document.getElementById(forms[i]).className += " show-form";
            this.document.getElementById(forms[i]).classList.remove("hide-form");
        }
        if(formsRecord[forms[i]] === false){
            this.document.getElementById(forms[i]).className += " hide-form"
            this.document.getElementById(forms[i]).classList.remove("show-form");
        }
    }
    
    });

    ReactDOM.render(
        <Gallery displays={data} />, 
        document.getElementById("gallery-container"));
};

const forms = ["2D", "3D", "Photography"];

let formsRecord: Record<string, boolean> = {};
let gallery: JSX.Element[] = [];
let index: number = 0;
let delay: number = 0;

for(let i = 0; i < forms.length; i++) {
    formsRecord[forms[i]] = false;
}


type Display = {
    id: number,
    thumbSrc: string,
    src: string, 
    title: string, 
    relativeUrl: string,
    collab: string,
    date: number, 
    medium: string,
    form: string,
    size: string
}

type PopUpProps = {
    display: Display
    hidden: boolean;
    hide: () => void
    showNewImage: (display: Display, direction: string) => void
}

type PopUpState = {
    hidden: boolean
    transitioning: boolean;
}


type GalleryProps = {
    displays: Display[]
}

type GalleryState = {
    selected: Display,
    showPopUp: boolean, 
    forms: string[]
}

type ThumbnailProps = {
    id: string,
    display: Display,
    selected: boolean,
    index: number,
    onSelect?: (display: Display, showPopUp: boolean) => void,
}

class Gallery extends React.Component<GalleryProps, GalleryState> {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.displays[0],
            showPopUp: false,
            forms: forms
        };
        
    }

    render() {
        return <div className="gallery-pop-up-container">
        <div className="gallery">
            {this.generateGalleryMediaQuery(this.state.forms)}  
        <div className="table-container">
            <div className="table">
            <Fade bottom delay={500}><ul id="gallery-selector">
                {forms.map((form) => {
                    return <li key={form}><a href={"portfolio.html#" + form + "-container"}><p className="gallery-link" id={form} 
                    onMouseOver={() => this.handleMouseEvent(form, "bold", "italic")} onMouseLeave={() => this.handleMouseEvent(form, "200", "normal")}>{form}</p></a>
                    {(form === forms[forms.length - 1]) ? "" : " /"}</li>
                })}
            </ul></Fade>
            </div>
        </div>
        </div>
        <CSSTransition
            in={this.state.showPopUp}
            appear={true}
            timeout={400}
            classNames="fade"
            unmountOnExit
            >
        <PopUp hidden={!this.state.showPopUp} display={this.state.selected} hide={() => this.setState({showPopUp: false})}
                showNewImage={(display, direction) => this.showNewImage(display, direction)}/>
        </CSSTransition>
        </div>;
    }

    showNewImage(display: Display, direction: string): void {
        let newDisplay, i;
        for(i = 0; i < gallery.length; i++) {
            if(gallery[i].props.display.id === display.id) {
                break;
            }
        }
        if(direction === "right") {
            newDisplay = gallery[i + 1].props.display;
        } else {
            newDisplay = gallery[i - 1].props.display;
        }
        this.selectedHandler(newDisplay, true);
    }

    selectedHandler(display: Display, showPopUp: boolean): void {
        this.setState({
            selected: display,
            showPopUp: showPopUp
        });
    }

    handleMouseEvent(id: string, weight: string, style: string): void {
        document.getElementById(id).style.fontWeight = weight;
        document.getElementById(id).style.fontStyle = style;
    }

    generateGalleryMediaQuery(forms: string[]): JSX.Element[] {
        let elements = [];
        for(let i = 0; i < forms.length; i++){

            let formGallery = this.generateGallery(forms[i]);

           elements.push(formGallery);

        }        
        return elements;
    }

    generateGallery(form: string): JSX.Element[] {
        let formGallery = this.props.displays.filter((display) => {return display.form === form}).map((display) => {
            return<Thumbnail id={display.relativeUrl} key={display.src} display={display}
                selected= {(display === this.state.selected) ? true : false }
                    onSelect= {(display, showPopUp) => this.selectedHandler(display, showPopUp)} index={this.incrementIndex()}/>
        });
        
        if(gallery.length < this.props.displays.length) {
            gallery = gallery.concat(formGallery);
        }
        return formGallery;
    }

    incrementIndex(): number {
        index++;
        return index;
    }
}


class PopUp extends React.Component<PopUpProps, PopUpState> {
    constructor(props) {
        super(props);

        this.state = {
            hidden: this.props.hidden,
            transitioning: true
        };
    }

    render() {
        return <div className="pop-up">
            <Fade delay={500} when={this.props.showNewImage}>
                    <div className="pop-up-body" onLoad={() => this.setState({transitioning: false})}>
                        <div className="arrow-container"><img className={"arrow" + ((this.props.display.id === gallery[0].props.display.id)? " hidden" : "")} id="arrow-left" src="images/svg/gallery-arrow-2.svg" 
                        onMouseDown={() => this.showNewImage(this.props.display, "left") }></img></div>
                        <div className={this.generatePopUpSize()}>
                            <div className="background-black">
                                <img className="pop-up-image" src={this.props.display.src} alt="image"></img>
                                <div className="pop-up-caption">
                                    <p><em>{this.props.display.relativeUrl.replace(/-/g, " ")}</em>{(this.props.display.collab === "none") ? "" : ` (Collab with ${this.props.display.collab})`}</p>
                                    <p>{this.props.display.medium}</p>
                                    <p>{this.props.display.date}</p>
                                </div>
                            </div>
                        <div id="exit-button-container"><img id="exit-button" src="images/svg/exit-button-2.svg" onMouseDown={() => this.hide()}></img></div>
                        </div>
                        <div className="arrow-container"><img className={"arrow" + ((this.props.display.id === gallery[gallery.length - 1].props.display.id)? " hidden" : "")} id="arrow-right" src="images/svg/gallery-arrow-2.svg" onMouseDown={() => this.showNewImage(this.props.display, "right")}></img></div>
                    </div>
                    </Fade>
               </div>;
    }

    generatePopUpSize(): string {
        let returned = "pop-up-image-and-caption "
        if(this.props.display.size === "wide") {
            return returned + "pop-up-wide"
        } else if (this.props.display.size === "narrow"){
            return returned + "pop-up-narrow";
        } else {
            return returned + "pop-up-regular";
        }
    }

    showNewImage(display: Display, direction: string) {
        console.log(this.state.transitioning);
        this.setState({transitioning: true});
        
        if(this.props.hide !== undefined){
            this.props.showNewImage(display, direction);
        }
    }

    hide() {
        if(this.props.hide !== undefined){
        this.props.hide();
        }
    }
}

class Thumbnail extends React.Component<ThumbnailProps> {
    render() {
        return <Fade bottom delay={this.delay()}><img id={this.props.id} className={"gallery-image " + this.props.display.form + "-thumbnail" + ((this.props.index % 2 === 0)? " even" : " odd")} 
        onMouseDown={() => this.handleMouseEvent(true)} src={this.props.display.thumbSrc} alt={this.props.display.title}></img></Fade>;
    }

    handleMouseEvent(showPopUp: boolean) {
        if(this.props.onSelect !== undefined){
            this.props.onSelect(this.props.display, showPopUp);
        }
    }

    delay(): number {
        delay += 200;
        return delay;
    }
}

window.addEventListener("load", main);
window.addEventListener("load", () => {delay = 0});