import React, { Component } from 'react';
import Axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const __urlApi = 'http://localhost:3005/api/todos';

export default class Todo extends Component {
    
    constructor(props){
        super(props);

        //crio o estado inicial (as propriedades) dessa classe
        this.state = {description: '', list:[]};

        //independente de quem chama o handleAdd, o this é a class Todo agora
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAdd() {
        Axios.post(__urlApi, {description : this.state.description})
            .then(r=>console.log('Funcionou!'));
    }
    
    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    render() {
        return (
            <div>
                <PageHeader name="Nova" small="tarefa" />
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    description={this.state.description} />
                <hr />
                <TodoList />
            </div>
        )
    }

    
}