import axios from "axios"
import 'dotenv/config';
import { WebhookClient } from "dialogflow-fulfillment";
import{ randomUUID, webcrypto}from"crypto";
import {Authorize} from './authenticationClient.service'
import { google } from'googleapis';

export class diary
{
  
  async registerDiary(agent:WebhookClient)
  {
    const authorize = new  Authorize();
    const jwtClient = authorize.authorizeAndCallAPI();

    const calendar = google.calendar({ version: 'v3', auth: jwtClient });




    calendar.events.list(
    {
      calendarId: 'primary', // Substitua por seu ID de calendário, se necessário.
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    },)

    const {servico, dateAgendamento, dataRegistro,idClient} = agent.parameters
    
    const data ={
        servico,
        dateAgendamento,
        dataRegistro,
        idClient,
        id:randomUUID()
    };

    const url = process.env.URLAGENDA || "https://sheetdb.io/api/v1/psu6kgf482c7g?#gid=172732777"; 

    axios.post(url,data).then(response => {
      agent.add(`Adgendado com sucesso 👍 \n` + `Para a data : ${data.dateAgendamento} \n `+ "Digite #MENU# para ver mais opçoes");
      })
      .catch(error => {
        agent.add("*ooops tive um problema 😞");
      });

     // const calendar = google.calendar({ version: 'v3', auth: jwtClient });
      return agent;
  } 


}
