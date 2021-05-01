const express = require('express')
const cors = require('cors')

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();

    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parsep del body
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('public'));
    }

    routes() {


        this.app.use(this.usuariosPath, require('../routes/users'));

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor coerriendo en puerto',
                this.port);
        });
    }
}






module.exports = Server;