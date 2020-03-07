import restaurants from '../modules/restaurants';

export default (RESTAURANT, restaurants, pedidos, accept, status, deliveryOrder, statusDelivery, acceptRestaurant) => {          
    let statusOrder = false;

    //Pedidos confirmados por el cliente y que faltan por aceptar
    //A traves de un query aceptamos el pedido
    // http://localhost:3000/restaurant/?confirm=yes    
    RESTAURANT.get('/', (req, res) => {                                        
        const confirm = req.query.confirm;        
        if (confirm === 'yes' && pedidos.length > 0) {
            if (statusOrder === false) {
                statusOrder = true;
                acceptRestaurant.push({statusOrder, pedidos});            
                res.json(acceptRestaurant);
            } else {
                res.send('Ya tienes un pedido');
            }
        } else {
            if (status[0] === true) {                
                res.json(pedidos);
            } else {
                res.send('Aún no han llegado pedidos');
            }
        }
    });

    //Se cancelan los pedidos
    RESTAURANT.delete('/cancel', (req,res) => {            
        if (statusOrder === true) {
            statusOrder = false;
            acceptRestaurant.length = 0;
            accept.length = 0;
            pedidos.length = 0;
            status[0] = false;
            res.send('Se borraron todos los pedidos');
        } else {
            res.send('No hay pedidos por cancelar');
        }
    });

    //Finalizamos el pedido poniendo a la orden un valor de finalizado
    RESTAURANT.get('/finish', (req, res) => {    
        if (statusDelivery[0] === false) {
            if(statusOrder === true) {
                deliveryOrder.push({order: 'finish', acceptRestaurant});
                statusDelivery[0] = true;
                res.json(deliveryOrder);
                statusOrder = false;
            } else {
                res.send('No hay pedidos para enviar');
            }
        } else{            
            res.send('Ya tienes un pedido finalizado');
        }
    });


}