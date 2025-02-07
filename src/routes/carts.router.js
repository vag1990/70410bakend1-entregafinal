import { Router } from "express";
const cartsRouter = Router();

import cartManager from "../managers/cartsManager.js";
const manager = new cartManager("./src/data/carts.json");


cartsRouter.post("/", async (req, res) => {
    try {
        const nuevoCarrito = await manager.crearCarrito();
        res.json(nuevoCarrito);
    } catch (error) {
        res.status(500).json({ error: "Error al intentar crear el carrito." })
    }
})

cartsRouter.get ("/:cid", async (req,res) =>{
    const cartId = parseInt(req.params.cid);

    try {
        const carritoBuscado = await manager.getCarritoById(cartId);
        res.json(carritoBuscado.products);
    } catch (error) {
        res.status(500).json({error:"No se pudo encontrar el carrito. "})

    }

})

cartsRouter.post ("/:cid/product/:pid", async (req,res)=>{
    const cartId = parseInt (req.params.cid);
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1;

try {
    const actualizarCarrito = await manager.agregarProductoAlCarrito(cartId,productId,quantity);
    res.json(actualizarCarrito.products)
} catch (error) {
    res.status(500).json({error: "Error Fatal, explota todo."})
}


})

export default cartsRouter; 