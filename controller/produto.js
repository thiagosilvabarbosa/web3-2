import {db} from "../bd.js"

export const getProdutos = (_,res)=>{
    const q = "SELECT * FROM produtos";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const postProdutos = (req,res)=>{
    const q = "INSERT INTO produtos (`nome`, `descricao`, `preco`, `idcategoria`, `disponivel`) VALUES (?)"

    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.preco,
        req.body.idcategoria,
        req.body.disponivel
    ]
    
    db.query(q,[values],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json(" Produto Cadastrado :) ")
    })
}

export const putProdutos = (req,res)=>{
    const q = "UPDATE produtos SET `nome` = ?, `descricao` = ?, `preco` = ?, `idcategoria` = ?, `disponivel = ?` WHERE `id` = ? "

    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.preco,
        req.body.idcategoria,
        req.body.disponivel
    ]

    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err)

        return res.status(200).json(" Produto Alterado :> ")
    })

}

export const deleteProdutos = (req,res)=>{
    const q = "DELETE FROM produtos where id=?"

    db.query(q,[req.params.id],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Cliente deletado com sucesso >:) ")
    })

}