import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
const Add = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const changeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({ id: uuidv4(), task: newTodo, isEdited: false, isDone: false })
    );
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          type="text"
          name="task"
          onChange={changeHandler}
          value={newTodo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;