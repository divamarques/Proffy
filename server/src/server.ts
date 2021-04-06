// PRIMEIRA ROTA - 

import express from 'express';
import routes from './routes';

// VARIÁVEL - TUDO PARTE DAQUI, 
const app = express();
app.use(express.json());
app.use(routes);





app.listen(3333);
// ouvir requisições http: - usando método Listen() - (porta) - (80 é padrão); 
// localhost:3333/user - rota a ser acessada