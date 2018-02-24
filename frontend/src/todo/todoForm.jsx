import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default (props) => {

    const actions = (e) => {
        if(e.key === 'Enter')
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        else if(e.key === 'Escape')
            props.handleClear();
    }

    return (
        <div role="form" className="todoForm row">
            <Grid cols="12,9,10">
                <input id='description' 
                    className='form-control' 
                    placeholder='Adicione ou pesquise uma tarefa'
                    value={props.description}
                    onKeyUp={actions}
                    onChange={props.handleChange} />
                <br />
                <sup>
                    [Shit + Enter]=> pesquisa uma tarefa | [Enter]=> adiciona tarefa | [Esc]=> Limpa a busca
                </sup>
            </Grid>
            <Grid cols="12,3,2">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton style="success" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>
    );
}