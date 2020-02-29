import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import restaurants from './modules/restaurants';

dotenv.config();

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/restaurants/:zona', (req, res) => {
    const zona = req.params.zona;              
    switch (zona) {
        case 'norte':                       
            const norte = `Restaurantes de la zona ${zona}: ${JSON.stringify(restaurants[0].restaurantes[0].menu)}, ${JSON.stringify(restaurants[0].restaurantes[1].nombre)}`;
            res.send(norte);            
            break;
        case 'sur':            
            const sur = `Restaurantes de la zona ${zona}: ${JSON.stringify(restaurants[1].restaurantes[0].nombre)}, ${JSON.stringify(restaurants[1].restaurantes[1].nombre)}`
            res.send(sur);
            break;
        case 'oriente':
            const oriente = `Restaurantes de la zona ${zona}: ${JSON.stringify(restaurants[2].restaurantes[0].nombre)}, ${JSON.stringify(restaurants[2].restaurantes[1].nombre)}`
            res.send(oriente);
            break;
        case 'poniente':
            const poniente = `Restaurantes de la zona ${zona}: ${JSON.stringify(restaurants[3].restaurantes[0].nombre)}, ${JSON.stringify(restaurants[3].restaurantes[1].nombre)}`
            res.send(poniente);
            break;
        default:
            res.send("Ingresaste una zona incorrecta");
    } 
});

APP.get('/:zona/:restaurante', (req, res) => {             
    const menu = restaurants.filter(platillo => platillo.zona === req.params.zona);    
    // res.send(`${JSON.stringify(restaurants[Number(id)].zona)}`);    
    // res.send(`${JSON.stringify(restaurants[Number(id)].restaurantes[1])}`);
    res.send(`${JSON.stringify(menu)}` );
    
});

SERVER.listen(process.env.PORT);