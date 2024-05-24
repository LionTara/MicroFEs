import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function ToDoInput({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <div>
      <Input
        placeholder="Type in here…"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="outlined" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}
