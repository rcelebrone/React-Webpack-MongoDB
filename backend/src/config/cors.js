module.exports = (req, res, next) => {
    //aqui pode restringir quais clients (dominio e porta) que podem usar a api
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //após receber a requisição nesse middleware, preciso do next para mandar pra frente
    //o a requisição e permitir que alguma rota responda
    next();
}