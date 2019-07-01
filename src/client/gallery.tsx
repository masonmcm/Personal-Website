// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";


// 2. Import our Data
import data from "./script/data"

let main = () => {
    // TODO:
    ReactDOM.render(
        <Gallery displays={data} />, 
        document.getElementById("gallery-container"));
};


type Display = {
    id: number,
    thumbSrc: string,
    src: string, 
    title: string, 
    collab: string,
    date: number, 
    medium: string,
    size: string
}

type PopUpProps = {
    display: Display
    hidden: boolean;
}

type GalleryProps = {
    displays: Display[]
}

type GalleryState = {
    selected: Display,
    showPopUp: boolean
}

type ThumbnailProps = {
    display: Display,
    selected: boolean,
    onSelect?: (display: Display, showPopUp: boolean) => void,
}

class Gallery extends React.Component<GalleryProps, GalleryState> {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.displays[0],
            showPopUp: false
        };
    }

    render() {
        return <div className="gallery-pop-up-container">
        <PopUp hidden={!this.state.showPopUp} display={this.state.selected}/>
        <div className="gallery">{
            this.props.displays.map((display) => {
                return <Thumbnail key={display.src} display={display}
                selected= {(display === this.state.selected) ? true : false }
                onSelect= {(display, showPopUp) => this.selectedHandler(display, showPopUp)}/>
            })
            }</div>
        </div>;
    }

    selectedHandler(display: Display, showPopUp: boolean): void {
        this.setState({
            selected: display,
            showPopUp: showPopUp
        });
    }

}

class PopUp extends React.Component<PopUpProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.generatePopUpClass()}>
                    <img className="pop-up-image" src={this.props.display.src} alt="image"></img>
                    <div className="pop-up-caption">
                        <p><em>{this.props.display.title}</em>{(this.props.display.collab === "none") ? "" : ` (Collab with ${this.props.display.collab})`}</p>
                        <p>{this.props.display.medium}</p>
                        <p>{this.props.display.date}</p>
                    </div>
               </div>;
    }

    generatePopUpClass(): string {
        let popUpClass = (this.props.hidden) ? "pop-up-hidden" : "pop-up";
        if(this.props.display.size === "wide") {
            console.log("wide");
            return popUpClass + " pop-up-wide"
        } else {
            return popUpClass;
        }
    }
}

class Thumbnail extends React.Component<ThumbnailProps> {
    render() {
        return <img className="gallery-image" onMouseEnter={() => this.handleMouseEvent(true)} onMouseLeave={() => this.handleMouseEvent(false)} src={this.props.display.thumbSrc} alt={this.props.display.title}></img>;
    }

    handleMouseEvent(showPopUp: boolean) {
        if(this.props.onSelect !== undefined){
            this.props.onSelect(this.props.display, showPopUp);
        }
    }
}

window.addEventListener("load", main);
