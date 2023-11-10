import{ randomUUID}from"crypto";
import axios from "axios"
import { WebhookClient } from "dialogflow-fulfillment";


export class clientService 
{
  async registerClient(agent: WebhookClient)
  {
    let {nome, telefone, email} =agent.parameters

    const data ={
      nome : nome,
      telefone:telefone,
      email:email,
      id:randomUUID()
     };

     const url = process.env.URLCLIENT|| 'https://sheetdb.io/api/v1/psu6kgf482c7g?#gid=1';
    
    axios.post(url,data).then(response => {

        agent.add(`${nome}, o seu cadastro foi realizado com sucesso 👍 \n` + "Digite #MENU# para ver mais opçoes");
        
      })
      .catch(error => {
        agent.add("*ooops tive um problema 😞");
      });

      return agent;
  }

}