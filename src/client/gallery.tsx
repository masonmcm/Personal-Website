// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";

// 2. Import our Data
import data from "./script/data"

let main = () => {
    // TODO:
    ReactDOM.render(
        <PopUp displays={data} />, 
        document.getElementById("pop-up-container"));
};


type Display = {
    id: number,
    thumbSrc: string,
    src: string, 
    title: string, 
    date: number, 
    medium: string
}

type PopUpProps = {
    displays: Display[]
}

type PopUpState = {
    selected: Display,
    isOpen: boolean
}

class PopUp extends React.Component<PopUpProps, PopUpState> {

    constructor(props) {
        super(props);

        this.state = {
            selected: undefined,
            isOpen: false
        };
    }

    render() {
        return <div className="pop-up">
                    <img className="pop-up-image" src={this.props.displays[5].src} alt="image"></img>
                    <div className="pop-up-caption">
                        <p><em>{this.props.displays[0].title}</em></p>
                        <p>{this.props.displays[0].medium}</p>
                        <p>{this.props.displays[0].date}</p>
                    </div>
               </div>;
    }
}

window.addEventListener("load", main);