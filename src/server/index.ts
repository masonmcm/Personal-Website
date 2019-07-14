import * as express from "express";
import * as exphbs from "express-handlebars"

let app = express();


app.use(express.static("dist/"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "hbs");
app.set("views", "src/server/views");

app.engine("hbs", exphbs({
    defaultLayout: "default",
    extname: "hbs",
}));

app.get("/", (req, res) => {
    res.render("landing-page", {
        title: "Landing Page",
        header: false
    })
});

app.get("/portfolio", (req, res) => {
    res.render("portfolio", {
        title: "Portfolio",
        header: true,
        displayHeader: false, 
        imageURL: "./images/svg/portfolio-button.svg"
    })
});

app.get("/portfolio?header=visible", (req, res) => {
    res.render("portfolio", {
        title: "Portfolio",
        header: true, 
        displayHeader: true,
        imageURL: "./images/svg/portfolio-button.svg"
    })
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        header: true, 
        displayHeader: false,
        imageURL: "./images/svg/about-button.svg"
    })
});

app.get("/about?header=visible", (req, res) => {
    res.render("about", {
        title: "About",
        header: true, 
        displayHeader: true,
        imageURL: "./images/svg/about-button.svg"
    })
});

app.get("/code", (req, res) => {
    res.render("code", {
        title: "Code",
        header: true,
        displayHeader: false,
        imageURL: "./images/svg/code-button.svg"
    })
});

app.get("/code?header=visible", (req, res) => {
    res.render("code", {
        title: "Code",
        header: true,
        displayHeader: true,
        imageURL: "./images/svg/code-button.svg"
    })
});

app.get("/writing", (req, res) => {
    res.render("writing", {
        title: "Writing",
        header: true, 
        displayHeader: false,
        imageURL: "./images/svg/writing-button.svg"
    })
});

app.get("/writing?header=visible", (req, res) => {
    res.render("writing", {
        title: "Writing",
        header: true, 
        displayHeader: true,
        imageURL: "./images/svg/writing-button.svg"
    })
});

export let main = async () => {
app.listen(1234, () => console.log("Listining on port 1234"))
    .on('error', (e) => console.error(e));
};

main();
