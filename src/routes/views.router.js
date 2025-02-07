import { Router } from "express";
const router = Router();

import productsManager from "../managers/productsManager.js";
const manager = new productsManager("./src/data/products.json");

//products
router.get("/products", async (req, res) => {
    const productos = await manager.getProducts();
    res.render("home", { productos })
})

//realtime
router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");

})

export default router;
