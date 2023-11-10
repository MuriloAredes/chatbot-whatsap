import { WebhookClient } from 'dialogflow-fulfillment';
import {Request, Response} from 'express';

export class InicializeController
{
  async inicialize(req:Request, res:Response)
  {
    
      console.log("welcome");
      
        if (!req.body) {
        res.status(400).send('O objeto request está vazio.');
        return;
      }
    
      const date = new Date();
      const dateFormattedString = date.toLocaleDateString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        hour12: false
      });
      const dateFormatted = new Date(dateFormattedString);
    
      console.log('antes do webhook');
    
      const agent = new WebhookClient({ request:req, response:res });
    
      console.log('depois do webhook');
    
     // if (dateFormatted.getTime() >= 5 && dateFormatted.getTime() < 12) {
      //  agent.add('Olá, bom dia! Seja bem-vindo! Teste de Webhook');
     // } else if (dateFormatted.getTime() >= 12 && dateFormatted.getTime() <= 17) {
    //    agent.add('Olá, boa tarde! Seja bem-vindo! Teste de Webhook');
    // } else {
     //   agent.add('Olá, boa noite! Seja bem-vindo! Teste de Webhook');
     // }
    
      
      // Envia a resposta do agente para Dialogflow
     // agent.handleRequest();
  }
}
