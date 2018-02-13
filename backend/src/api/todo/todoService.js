//pega o que foi exportado no todo.js
const Todo = require('./todo');

Todo.methods(['get','post','put','delete']);
//quando eu mandar uma post, quero que retorne o dado atualizado, então uso new: true
//por algum motivo o node-restful não valida atualizações com o que colocamos 
//no schema (require e type por exemplo), então tenho que forçar que rode as atualizações
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;