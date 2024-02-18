import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, updateTodo } from "../Redux/todoSlice";

const UpdateTodo = ({ todoTask, todoid }) => {
  const dispatch = useDispatch();
  const [updatedtask, setUpdatedTask] = useState(todoTask);

  const changeHandler = (e) => {
    setUpdatedTask(e.target.value);
  };
  const updateHandler = () => {
    dispatch(updateTodo({ id: todoid, task: updatedtask }));
    dispatch(editTodo(todoid));
  };
  const cancelHandler = () => {
    dispatch(editTodo(todoid));
  };

  return (
    <div>
      <form>
        <input type="text" defaultValue={todoTask} onChange={changeHandler} />
        <button onClick={updateHandler}>Update</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateTodo;