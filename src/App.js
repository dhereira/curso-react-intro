import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodobutton';
import React from 'react';
import './App.css';
const defaultTodos =[
  {text: 'cortar cebolla', completed: false},
  {text: 'llorar desconsoladamente', completed: false},
  {text:'comprar pañuelos', completed: true},
  {text:'limpiar los mocos', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed ={9} total ={12}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo=>(<TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList> 
     <CreateTodoButton />     
    </React.Fragment>
  );
}





export default App;
