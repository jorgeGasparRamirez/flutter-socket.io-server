const {io} = require('../index.js');
const Bands  = require('../models/bands');
const Band  = require('../models/band');


const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Heroes del Silencio'));
bands.addBand(new Band('Metallica'));

console.log(bands.getBands());


io.on('connection', client => {
    console.log('Cliente conectado');
    
    client.emit('active-bands',bands.getBands());    

    client.on('disconnect', () => { console.log('Cliente desconectado')});

    client.on('mensaje',(payload)=>{
        //console.log('Mensaje!!!!!!', payload);

        io.emit('mensaje',{admin:'Nuevo mensaje'});
    });

    client.on('nuevo-mensaje',(payload)=>{
        io.emit('nuevo-mensaje',{'nombre':'Jorge Gaspar', 'apellido': 'Ramirez Segura', 'edad': 34});
    });

    client.on('mensaje2',(payload)=>{
       client.broadcast.emit('mensaje2',payload);
    });

    client.on('vote-band',(payload)=>{                                         
     bands.voteBand(payload['id']);
     io.emit('active-bands',bands.getBands());
    });

    client.on('add-band',(payload)=>{
        bands.addBand(new Band(payload['name']));
        io.emit('active-bands',bands.getBands());
    });

    client.on('delete-band',(payload)=>{
      bands.deleteBand(payload['id']);
      io.emit('active-bands',bands.getBands());
    });
  }); 