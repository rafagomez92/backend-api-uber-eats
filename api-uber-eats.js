import http from 'http';
import express from 'express';
import client from './components/client';
import delivery from './components/delivery';
import restaurant from './components/restaurant';
import restaurants from './modules/restaurants';
import dotenv from 'dotenv';

dotenv.config();

const APP = express();
const CLIENT = express();
const DELIVERY = express();
const RESTAURANT = express();

const pedidos = [];

APP.use('/client', CLIENT);  //Ruta exclusiva para el cliente
APP.use('/delivery', DELIVERY);  //Ruta exclusiva para el repartidor
APP.use('/restaurant', RESTAURANT);  //Ruta exclusiva para restaurant

const SERVER = http.createServer(APP);


APP.get('/', (req, res) => {    
    res.send('Bienvenido');    
});

client(CLIENT, restaurants, pedidos);

SERVER.listen(process.env.PORT);