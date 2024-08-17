const {Router} = require("express");
const router = Router();

// get post put delete

router.get('/atendimentos', (req, res) =>{ 
    res.send("Chgou aqui, listnaod atendimentos");
} );

router.post('/atendimentos', (req, res) =>{
    res.send("Chgou aqui, criando atendimento")
});

router.put('/atendimento/:id', (req, res) =>{
    const {id} = req.params;
    res.send(`Chgou aqui, atualizando atendimento ${id}`)
});

router.delete('/atendimento/:id', (req, res) =>{
    const {id} = req.params;
    res.send(`Chgou aqui, atualizando atendimento ${id}`)
});

module.exports = router;