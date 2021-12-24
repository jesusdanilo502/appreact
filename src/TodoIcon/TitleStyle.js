import React from "react";
import { TodoContext } from '../TodoContext';
import {  TodoTitle } from "./";



function TitleStyle({ completed ,text}) {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (  <
        TodoTitle
        type ='list'
        color = {totalTodos === completedTodos ? 'green':'red'}
        style = {totalTodos === completedTodos ? 'completed':'loading'}
        text ={totalTodos === completedTodos ? 'Lo Has Logrado' : 'Si te Mandan a Mercar No Olvides Nada es por tu Bien!'}
        />
    );
}
export { TitleStyle };