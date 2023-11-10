
import express from 'express';
import {InicializeController} from './controller/inicialize.controller'


const router = express.Router();

const inicializeController = new InicializeController(); 


router.post("/wook",  (req,res) =>
{
    inicializeController.inicialize(req,res);
});

router.get("/teste", (request,response) =>{ 
    response.status(200).send('Esta é uma rota de teste!')})
export default router ;