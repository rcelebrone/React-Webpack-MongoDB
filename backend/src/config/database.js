const mongoose = require('mongoose');
//só pra tirar o alerta da api de promises
mongoose.Promises = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo');
//para que o mongo funcione, tem que criar na raiz do SO a pasta data/db com permissão para o mongo
// se o mongo não iniciar, tente:
    //sudo killall -15 mongod
    //ou
    //sudo service mongod stop