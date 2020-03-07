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

const pedidos = [];  //Array que almacena los pedidos por el usuario
const accept = []; //Array que almacena el pedido y la variable de status
const status = [false]; //Array que almacena una variable de status
const deliveryOrder = []; //array que almacena los pedidos para el repartidor
const statusDelivery = [false];
const acceptRestaurant = [];
APP.use('/client', CLIENT);  //Ruta exclusiva para el cliente
APP.use('/delivery', DELIVERY);  //Ruta exclusiva para el repartidor
APP.use('/restaurant', RESTAURANT);  //Ruta exclusiva para restaurant

const SERVER = http.createServer(APP);


APP.get('/', (req, res) => {    
    res.send('Bienvenido');    
});

client(CLIENT, restaurants, pedidos, accept, status);
restaurant(RESTAURANT, restaurants, pedidos, accept, status, deliveryOrder, statusDelivery, acceptRestaurant);
delivery(DELIVERY, restaurants, pedidos, accept, status, deliveryOrder, statusDelivery, acceptRestaurant);

SERVER.listen(process.env.PORT);