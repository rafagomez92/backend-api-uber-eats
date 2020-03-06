import restaurants from '../modules/restaurants';
import { v4 as uuidv4 } from 'uuid';


export default (CLIENT, restaurants, pedidos) => {  

    //Para checar los restaurantes por zona puedes ingresar (norte, sur, oriente, poniente)
    //La zona se obtiene a traves de un query http://localhost:3000/client/zona?zona=sur
    CLIENT.get('/zona', (req, res) => {                                
        const zona = restaurants.filter(p => p.zona === req.query.zona);        
        if (zona) {  //Si encuentra la zona imprime los restaurantes
            res.json({ status: 'ok', result: zona });               
        } else {  //Sino indica el error de 404
            res.sendStatus(404);
        }    
    });
    
    //Acá consultamos el nombre del restaurante y los platillos que ofrece
    //Se obtiene a traves de un query realizando la siguiente consulta http://localhost:3000/client/restaurant?name=Taco loco
    CLIENT.get('/restaurant', (req, res) => {                                
        const restaurantName = restaurants.find(p => p.name === req.query.name);  //a través del find localizamos el nombre del restaurant              
        if (restaurantName) {
            res.json({ status: 'ok', result: restaurantName.dishes }); //en el json enviamos los platillos
        } else { //Sino encuentra el nombre del restaurante indica el error 404
            res.sendStatus(404);
        }
    });

    //Esta es la ruta para seleccionar los platillos
    //Ingresamos en el path el nombre del restaurant y con un query obtenemos el platillo que vamos a seleccionar
    CLIENT.post('/restaurant/:name', (req, res) => {        
        const restaurantName = restaurants.find(p => p.name === req.params.name);
        if (restaurantName) {
            const pedido = restaurantName.dishes.find(p => p.dish === req.query.pedido);
            pedido.id = uuidv4();
            if (pedido) {                
                pedidos.push(pedido);                
            } else {
                res.send('Ese platillo no lo tenemos en el menu');
            }
        } else {
            res.sendStatus(404);
        }        
        res.json(pedidos);        
    });

    //Esta ruta me sirve para ver los pedidos y para cancelar un platillo (a traves de un query)
    //el pedido se elimina a traves de su id
    CLIENT.delete('/pedidos', (req,res) => {
        if (req.query.id) {
            const pedido = pedidos.find(p => p.id === req.query.id);
            if(pedido) {
                pedidos = pedidos.filter(p => p.id !==req.query.id);
                res.json({ status: 'ok', result: pedido });
            } else {
                res.sendStatus(404);
            }            
        } else {
            res.sendStatus(404);
        }
    });

    //Checkout del pedido actual
    CLIENT.get('/pedidos', (req,res) => {
        if (pedidos.length > 0) {            
            res.json(pedidos);
        } else {
            res.send('No hay platillos seleccionados');
        }
    })

    //Cancelar el pedido actual
    CLIENT.get('/cancel', (req,res) => {
        pedidos = [];
        res.send('El pedido se ha cancelado');
        console.log(pedidos);
    });


}