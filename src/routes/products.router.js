import { Router } from "express";
const productsRouter = Router();

import productsManager from "../managers/productsManager.js"
const manager = new productsManager ("./src/data/products.json")

 
productsRouter.get("/", async (req, res) => {
     
    let limit = req.query.limit; 

    const productos = await manager.getProducts(); 
    
    if(limit) {
        res.send(productos.slice(0, limit)); 
    } else {
        res.send(productos); 
    }
})


productsRouter.get("/:pid",  async (req, res) => {
    let id = req.params.pid; 
    const productoBuscado = await manager.getProductsById(parseInt(id)); 
    res.send(productoBuscado); 
})



export default productsRouter; 