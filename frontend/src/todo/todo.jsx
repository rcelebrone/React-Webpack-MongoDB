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
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = (description ? `&description__regex=/${description}/` : '');

        Axios.get(`${__urlApi}?sort=-createdAt${search}`)
            .then(r => this.setState({...this.state, description: this.state.description, list: r.data}));
    }

    handleAdd() {
        const description = this.state.description;
        Axios.post(__urlApi, { description })
            .then(r => this.refresh());
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleRemove(todo) {
        Axios.delete(`${__urlApi}/${todo._id}`)
            .then(r => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo) {
        Axios.put(`${__urlApi}/${todo._id}`, { ...todo, done: true })
            .then(r => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        Axios.put(`${__urlApi}/${todo._id}`, { ...todo, done: false })
            .then(r => this.refresh(this.state.description));
    }
    

    render() {
        return (
            <div>
                <PageHeader name="Nova" small="tarefa" />
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    description={this.state.description} />
                <hr />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }

    
}