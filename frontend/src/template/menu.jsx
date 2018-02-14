import React from 'react';

export default (props) => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link active" href="#">
                <i className="fa fa-calendar-check-o"></i> Todo app xD~
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/todos">Nova tarefa</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#/about">Sobre</a>
        </li>
    </ul>
)