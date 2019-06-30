
export let main = () => {

    const portfolioButton = document.getElementsByClassName("grid-item_portfolio")[0];

    portfolioButton.addEventListener("mouseover", () => { onHover("plain",  "white")});
    portfolioButton.addEventListener("mouseout", () => { onHover("white",  "plain")});

    const codeButton = document.getElementsByClassName("grid-item_code")[0];
    
    codeButton.addEventListener("mouseover", () => { onHover("plain",  "yellow")});
    codeButton.addEventListener("mouseout", () => { onHover("yellow",  "plain")});

    const writingButton = document.getElementsByClassName("grid-item_writing")[0];
    
    writingButton.addEventListener("mouseover", () => { onHover("plain",  "blue")});
    writingButton.addEventListener("mouseout", () => { onHover("blue",  "plain")});

    const aboutButton = document.getElementsByClassName("grid-item_about")[0];
    
    aboutButton.addEventListener("mouseover", () => { onHover("plain",  "red")});
    aboutButton.addEventListener("mouseout", () => { onHover("red",  "plain")});

};

let onHover = (hide: string, show: string) => {
    const hideElement = document.getElementsByClassName(hide)[0] as HTMLElement;
    const showElement = document.getElementsByClassName(show)[0] as HTMLElement;

    hideElement.style.display = "none";
    showElement.style.display = "block";
};


window.addEventListener("load", main);