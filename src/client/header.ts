const header = document.getElementById("header") as HTMLElement;

let main = () => {

    const navButtonImage = document.getElementsByClassName("nav-button-image")[0];

    navButtonImage.addEventListener("mouseover", () => { navInteract("nav-button-image", "name-button-image-black", "name-button-image-white", "black", true)});
    navButtonImage.addEventListener("touchstart", () => { navInteract("nav-button-image", "name-button-image-black", "name-button-image-white", "black", true)});

    const circularNavButton = document.getElementsByClassName("circular-nav-button")[0];

    circularNavButton.addEventListener("mouseover", () => { navInteract("name-button-image-white", "name-button-image-black", "nav-button-image", "white", false)});
    circularNavButton.addEventListener("click", () => { navInteract("name-button-image-white", "name-button-image-black", "nav-button-image", "white", false)});

    const container = document.getElementsByClassName("container")[0];

    container.addEventListener("mouseover", () => { navInteract("name-button-image-white", "name-button-image-black", "nav-button-image", "white", false)});
    container.addEventListener("click", () => { navInteract("name-button-image-white", "name-button-image-black", "nav-button-image", "white", false)});

};

let navInteract = (item1: string, item2: string, item3: string, color: string, on: boolean) => {
    
    let display1, display2, display3;

    if(on) {
        display1 = "none";
        display2= "none";
        display3= "block";
    } else {
        display1 = "none";
        display2= "block";
        display3= "block";
    }

    const element1 = document.getElementsByClassName(item1)[0] as HTMLElement;
    const element2 = document.getElementsByClassName(item2)[0] as HTMLElement;
    const element3 = document.getElementsByClassName(item3)[0] as HTMLElement;

    element1.style.display = display1;
    element2.style.display = display2;
    element3.style.display = display3;
    header.style.backgroundColor = color;
};



window.addEventListener("load", main);

window.onload = function () {
    if(window.location.href.includes("visible")) {
        navInteract("nav-button-image", "name-button-image-black", "name-button-image-white", "black", true);
    }
};