import {db} from "../bd.js"

export const getCategorias = (_,res)=>{
    const q = "SELECT * FROM categorias";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const postCategorias = (req,res)=>{
    const q = "INSERT INTO categorias (`nome`, `descricao`) VALUES (?)"

    const values = [
        req.body.nome,
        req.body.descricao
    ]
    
    db.query(q,[values],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json(" Categoria Cadastrada :) ")
    })
}

export const putCategorias = (req,res)=>{
    const q = "UPDATE categorias SET `nome` = ?, `descricao` = ? WHERE `id` = ? "

    const values = [
        req.body.nome,
        req.body.descricao
    ]

    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err)

        return res.status(200).json(" Categoria Alterada :> ")
    })

}

export const deleteCategorias = (req,res)=>{
    const q = "DELETE FROM categorias where id=?"

    db.query(q,[req.params.id],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Categoria deletada com sucesso >:) ")
    })

}