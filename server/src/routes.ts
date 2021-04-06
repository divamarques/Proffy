import express from 'express';
import datab from './database/connection';

const routes = express.Router();


routes.post('/classes', async (request,response) => {
 
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  await datab('users').insert({
    name,
    avatar, 
    whatsapp,
    bio
  });

  return response.send();
});

export default routes;