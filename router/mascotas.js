const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.render("mascotas",{
        arrayMascotas:[
            {id: 'klasdj', nombre:'rex', descripcion: 'rex descripcion'},
            {id: 'klasdj', nombre:'lolo', descripcion: 'lolo descripcion'}

        ]
    })
})

module.exports=router;