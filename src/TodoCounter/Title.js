import React from "react";
import { TodoContext } from '../TodoContext';
import {Titulo} from '../TodoIcon/TitleStyle'
import './TodoCounter.css'

function Title(props){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <h1 className="Title">Carrito de Compra  {totalTodos}
          <Titulo
          completed={props.completed}
          />
        </h1>
        

    )
}
export { Title };