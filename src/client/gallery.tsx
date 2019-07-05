// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";


// 2. Import our Data
import data from "./script/data"

import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade'

let main = () => {

    window.addEventListener("scroll", function() {

    forms.forEach((form) => { 
        formsRecord[form] = ((window.scrollY > document.getElementById(form + "-container").offsetTop - 250) &&
        (window.scrollY < document.getElementById(form + "-container").offsetTop + document.getElementById(form + "-container").offsetHeight - 250) ? true : false);
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
}

type PopUpState = {
    hidden: boolean
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
        return <Fade bottom><div className="gallery-pop-up-container">
        <PopUp hidden={!this.state.showPopUp} display={this.state.selected}/>
        <div className="gallery">
        {this.generateGalleryMediaQuery(this.state.forms)}</div>
        <div className="table-container">
            <div className="table">
            <ul id="gallery-selector">
                {forms.map((form) => {
                    return <li key={form}><a href={"portfolio.html#" + form + "-container"}><p className="gallery-link" id={form} 
                    onMouseOver={() => this.handleMouseOver(form)} onMouseLeave={() => this.handleMouseOut(form)}>{form}</p></a>
                    {(form === forms[forms.length - 1]) ? "" : " /"}</li>
                })}
            </ul>
            </div>
        </div>
        </div>
        </Fade>;
    }

    selectedHandler(display: Display, showPopUp: boolean): void {
        this.setState({
            selected: display,
            showPopUp: showPopUp
        });
    }

    handleMouseOver(id: string): void {
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.fontStyle = "italic";
    }

    handleMouseOut(id: string): void {
        document.getElementById(id).style.fontWeight = "200";
        document.getElementById(id).style.fontStyle = "normal";
    }

    generateGalleryMediaQuery(forms: string[]): JSX.Element[] {
        let elements = [];
        for(let i = 0; i < forms.length; i++){
        elements.push(<MediaQuery minWidth={961} key={forms[i] + " desktop"}>
            <div id={forms[i] + "-container"} key={forms[i] + "-container"} className="form-container">
                {this.generateGallery(forms[i])}
            </div> 
            <img className="page-break gallery-page-break" src="images/svg/page-break.svg"></img></MediaQuery>);
        elements.push(<MediaQuery maxWidth={960} key={forms[i] + " mobile"}>{this.generateGallery(forms[i])}</MediaQuery>);
        }                
        return elements;
    }

    generateGallery(form: string): JSX.Element[] {
        return this.props.displays.filter((display) => {return display.form === form}).map((display) => {
            return <Thumbnail id={display.relativeUrl} key={display.src} display={display}
                selected= {(display === this.state.selected) ? true : false }
                    onSelect= {(display, showPopUp) => this.selectedHandler(display, showPopUp)}/>});
    }
}

class PopUp extends React.Component<PopUpProps, PopUpState> {
    constructor(props) {
        super(props);

        this.state = {
            hidden: this.props.hidden
        };
    }

    render() {
        return <Fade right when={!this.props.hidden}>
            <div className={(this.props.hidden) ? "pop-up-hidden" : "pop-up"}>
                    <div className={this.generatePopUpSize()}>
                    <img className="pop-up-image" src={this.props.display.src} alt="image"></img>
                    <div className="pop-up-caption">
                        <p><em>{this.props.display.relativeUrl.replace(/-/g, " ")}</em>{(this.props.display.collab === "none") ? "" : ` (Collab with ${this.props.display.collab})`}</p>
                        <p>{this.props.display.medium}</p>
                          <p>{this.props.display.date}</p>
                    </div>
                    </div>

               </div>
               </Fade>;
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

    hidePopUp(): void {
        
    }
}

class Thumbnail extends React.Component<ThumbnailProps> {
    render() {
        return <img id={this.props.id} className="gallery-image" onMouseDown={() => this.handleMouseEvent(true)} onMouseLeave={() => this.handleMouseEvent(false)} src={this.props.display.thumbSrc} alt={this.props.display.title}></img>;
    }

    handleMouseEvent(showPopUp: boolean) {
        if(this.props.onSelect !== undefined){
            this.props.onSelect(this.props.display, showPopUp);
        }
    }
}

window.addEventListener("load", main);
