import React, { useState, useRef } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import CompletedList from './CompletedList';

export default function ToDo() {
  const [toDoItems, setToDoItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const idRef = useRef(0);

  const addItem = (item) => {
    const id = idRef.current;
    idRef.current += 1;
    setToDoItems([{ id, item }, ...toDoItems]);
  };

  const handleCheck = (id) => {
    const item = toDoItems.find((item) => item.id === id);
    setToDoItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setCompletedItems((prevItems) => [...prevItems, item]);
  };
  
  const handleUncheck = (id) => {
    const item = completedItems.find((item) => item.id === id);
    setCompletedItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setToDoItems((prevItems) => [...prevItems, item]);
  };

  const handleDelete = (id) => {
    setToDoItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setCompletedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">To Do List</h2>
      <ToDoInput addItem={addItem} />
      <div className="mt-6">
      <ToDoList items={toDoItems} onCheck={handleCheck} onDelete={handleDelete} />
        <CompletedList items={completedItems} onUncheck={handleUncheck} onDelete={handleDelete} />
      </div>
    </div>
  );
}
