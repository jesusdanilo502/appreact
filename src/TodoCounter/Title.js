import React from "react";
import { TodoContext } from '../TodoContext';

import './TodoCounter.css'

function Title(props){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <h1 className="Title">Lista del Mercado </h1>
        

    )
}
export { Title };