import {db} from "../bd.js"

export const getItensPedidos = (_,res)=>{
    const q = "SELECT * FROM clientes";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const postItensPedidos = (req,res)=>{
    const q = "INSERT INTO itenspedido (`id_pedido`, `id_produto`, `quantidade`, `preco_unitario`) VALUES (?)"

    const values = [
        req.body.id_pedido,
        req.body.id_produto,
        req.body.quantidade,
        req.body.preco_unitario
    ]
    
    db.query(q,[values],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json(" Itens do Pedido Cadastrados :) ")
    })
}

export const putItensPedidos = (req,res)=>{
    const q = "UPDATE itenspedido SET `id_pedido` = ?, `id_produto` = ?, `quantidade` = ?, `preco_unitario` = ? WHERE `id` = ? "

    const values = [
        req.body.id_pedido,
        req.body.id_produto,
        req.body.quantidade,
        req.body.preco_unitario
    ]

    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err)

        return res.status(200).json(" Item do pedido Alterado :> ")
    })

}

export const deleteItensPedidos = (req,res)=>{
    const q = "DELETE FROM itenspedido where id=?"

    db.query(q,[req.params.id],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Item do pedido deletado com sucesso >:) ")
    })

}