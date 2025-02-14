import { Router } from "express";
const routerImagenes = Router();

routerImagenes.get("/", (req, res) => {
    res.render("index");
})






export default routerImagenes;
