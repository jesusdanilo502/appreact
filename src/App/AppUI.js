import React from 'react';
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading'
import {EmptyTodos} from '../EmptyTodos';
import {Title} from '../TodoCounter/Title'

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <Title/>     
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {error && <TodosError error={error}/>}
                {loading &&
                    new Array(4).fill().map((item, index)=>(
                        <TodosLoading key={index} />
                    ))}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}


                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {/*puedo crear otro componete teletranportado sin usar el clasio div de root*/}

            {!!openModal && (
                <Modal>
                   <TodoForm></TodoForm>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI};