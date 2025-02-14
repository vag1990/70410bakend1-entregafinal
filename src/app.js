
import express from "express";
import {engine} from "express-handlebars";
import multer from "multer";
import routerImagenes from "./routes/imagen.router.js";
const app = express();
const PUERTO = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(".src/public"));

// express-handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");


//routes

app.use("/", routerImagenes);



//listening
app.listen(PUERTO, () => console.log('Escuchando puerto: ${PUERTO}'));

