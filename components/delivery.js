import restaurants from '../modules/restaurants';

export default (DELIVERY, restaurants, pedidos, accept, status, deliveryOrder, statusDelivery, acceptRestaurant) => { 
    let statusOrder = false;
    let cancel = true;
    
    DELIVERY.get('/', (req, res) => {            
        if (statusDelivery[0] === true) {
            deliveryOrder[0].order = 'stand by';            
            res.json(deliveryOrder);            
        } else {
            res.send('No hay pedidos');
        }
    });


    //Aceptamos nuestro pedido con un query http://localhost:3000/delivery/accept?confirm=yes
    DELIVERY.get('/accept', (req, res) => {
        const accept = deliveryOrder.find(p => p.order === 'stand by');
        const confirm = req.query.confirm;
        if (confirm === 'yes') {
            deliveryOrder[0].order = 'accept';            
            res.json(deliveryOrder);
            statusOrder = true;
            cancel = false;
        } else {
            res.json(deliveryOrder);
        }
    });

    
    //Ver pedido actual
    DELIVERY.get('/pedidos', (req, res) => {
        if (statusOrder === true) {
            res.json(deliveryOrder);
        } else {
            res.send('No hay pedidos aceptados');
        }
    });

    //Orden finalizada
    DELIVERY.get('/finish', (req, res) => {
        if (statusOrder === true) {
            deliveryOrder[0].order = 'finish';            
            res.json(deliveryOrder);
            deliveryOrder.length = 0;
            statusDelivery[0] = false;            
            statusOrder = false;            
            accept.length = 0;
            pedidos.length = 0;
            acceptRestaurant.length = 0;
            status[0] = false;
        } else {
            res.send('No hay pedidos');
        }
    });
    
    //cancelamos el pedido
    DELIVERY.delete('/cancel', (req,res) => {  
        if (cancel === false) {
            res.send('No hay pedidos por cancelar');
        } else {                                    
            deliveryOrder.length = 0;
            statusDelivery[0] = false;            
            statusOrder = false;            
            accept.length = 0;
            pedidos.length = 0;
            acceptRestaurant.length = 0;
            status[0] = false;
            res.send('Se borraron todos los pedidos');            
        }
    });

}



