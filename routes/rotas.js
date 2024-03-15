import express from "express";
import {getClientes,postClientes,putClientes,deleteClientes} from "../controller/cliente.js"
import {getProdutos, postProdutos, putProdutos, deleteProdutos} from "../controller/produto.js"
import {getCategorias, postCategorias, putCategorias, deleteCategorias} from "../controller/categoria.js"
import {getPedidos, postPedidos, putPedidos, deletePedidos} from "../controller/pedido.js"
import {getItensPedidos, postItensPedidos, putItensPedidos, deleteItensPedidos} from "../controller/itenspedidos.js"

const router = express.Router();
//CLIENTES
router.get("/clientes/", getClientes);
router.post("/clientes/", postClientes);
router.put("/clientes/:id", putClientes);
router.delete("/clientes/:id", deleteClientes);
//PRODUTOS
router.get("/produtos/", getProdutos);
router.post("/produtos/", postProdutos);
router.put("/produtos/:id", putProdutos);
router.delete("/produtos/:id", deleteProdutos);
//CATEGORIAS
router.get("/categorias/", getCategorias);
router.post("/categorias/", postCategorias);
router.put("/categorias/:id", putCategorias);
router.delete("/categorias/:id", deleteCategorias);
//PEDIDOS
router.get("/pedidos/", getPedidos);
router.post("/pedidos/", postPedidos);
router.put("/pedidos/:id", putPedidos);
router.delete("/pedidos/:id", deletePedidos);
//ITENSPEDIDO
router.get("/itenspedidos/", getItensPedidos);
router.post("/itenspedidos/", postItensPedidos);
router.put("/itenspedidos/:id", putItensPedidos);
router.delete("/itenspedidos/:id", deleteItensPedidos);

export default router;