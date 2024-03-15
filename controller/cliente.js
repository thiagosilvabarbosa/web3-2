import {db} from "../bd.js"

export const getClientes = (_,res)=>{
    const q = "SELECT * FROM clientes";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const postClientes = (req,res)=>{
    const q = "INSERT INTO clientes (`nome`, `email`, `endereco`, `telefone`) VALUES (?)"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.endereco,
        req.body.telefone
    ]
    
    db.query(q,[values],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json(" Cliente Cadastrado :) ")
    })
}

export const putClientes = (req,res)=>{
    const q = "UPDATE clientes SET `nome` = ?, `email` = ?, `endereco` = ?, `telefone` = ? WHERE `id` = ? "// talvez precise de um ; depois do ?

    const values = [
        req.body.nome,
        req.body.email,
        req.body.endereco,
        req.body.telefone
    ]

    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err)

        return res.status(200).json(" Cliente Alterado :> ")
    })

}

export const deleteClientes = (req,res)=>{
    const q = "DELETE FROM clientes where id=?"

    db.query(q,[req.params.id],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Cliente deletado com sucesso >:) ")
    })

}