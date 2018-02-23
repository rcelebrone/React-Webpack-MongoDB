import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default (props) => (
    <div role="form" className="todoForm row">
        <Grid cols="12,9,10">
            <input id='description' 
                className='form-control' 
                placeholder='Adicione ou pesquise uma tarefa'
                value={props.description}
                onChange={props.handleChange} />
            <br />
            <sup>
                [Shit + Enter]=> pesquisa uma tarefa | [Enter]=> adiciona tarefa
            </sup>
        </Grid>
        <Grid cols="12,3,2">
            <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
            <IconButton style="success" icon="search" onClick={props.handleSearch} />
        </Grid>
    </div>
)