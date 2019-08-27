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
        imageURL: "./images/svg/portfolio-button.svg"
    })
});


app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        header: true, 
        imageURL: "./images/svg/about-button.svg"
    })
});


app.get("/code", (req, res) => {
    res.render("code", {
        title: "Code",
        header: true,
        imageURL: "./images/svg/code-button.svg"
    })
});


app.get("/writing", (req, res) => {
    res.render("writing", {
        title: "Writing",
        header: true, 
        imageURL: "./images/svg/writing-button.svg"
    })
});

app.get("/code-1", (req, res) => {
    res.render("code-1", {
        title: "Code 1",
        header: false, 
    })
});

app.get("/code-2", (req, res) => {
    res.render("code-2", {
        title: "Code 2",
        header: false, 
    })
});

app.get("/code-3", (req, res) => {
    res.render("code-3", {
        title: "Code 3",
        header: false, 
    })
});

app.get("/writing-1", (req, res) => {
    res.render("writing-1", {
        title: "Writing 1",
        header: false, 
    })
});

app.get("/writing-2", (req, res) => {
    res.render("writing-2", {
        title: "Writing 2",
        header: false, 
    })
});

app.get("/writing-3", (req, res) => {
    res.render("writing-3", {
        title: "Writing 3",
        header: false, 
    })
});

<<<<<<< HEAD:server/index.ts
export let main = async () => {	
=======
export let main = async () => {
>>>>>>> 5e83e361983c0044ec8b42af3754eff0cd6e3b39:src/server/index.ts
    console.log(process.env.NODE_ENV);
    const PORT = process.env.NODE_ENV === "production" ? 80 : 1234;
    console.log(process.env.NODE_ENV);
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
        .on("error", (e) => console.error(e));
};

main();
