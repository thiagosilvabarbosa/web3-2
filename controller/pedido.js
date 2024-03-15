import {db} from "../bd.js"

export const getPedidos = (_,res)=>{
    const q = "SELECT * FROM pedidos";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const postPedidos = (req,res)=>{
    const q = "INSERT INTO pedidos (`id_cliente`, `data_pedido`, `status`) VALUES (?)"

    const values = [
        req.body.id_cliente,
        req.body.data_pedido,
        req.body.stauts
    ]
    
    db.query(q,[values],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json(" Pedido Cadastrado :) ")
    })
}

export const putPedidos = (req,res)=>{
    const q = "UPDATE pedidos SET `id_cliente` = ?, `data_pedido` = ?, `status` = ? WHERE `id` = ? "

    const values = [
        req.body.id_cliente,
        req.body.data_pedido,
        req.body.stauts
    ]

    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err)

        return res.status(200).json(" Pedido Alterado :> ")
    })

}

export const deletePedidos = (req,res)=>{
    const q = "DELETE FROM pedidos where id=?"

    db.query(q,[req.params.id],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Pedido deletado com sucesso >:) ")
    })

}