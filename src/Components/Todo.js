import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, editTodo } from "../Redux/todoSlice";
import UpdateTodo from "./UpdateTodo";

const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editTodo(todoInfo.id));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todoInfo.id));
  };
  const completeTodoHandler = (e) => {
    e.preventDefault();
    dispatch(completeTodo(todoInfo.id));
  };

  return (
    <div>
      {todoInfo.isDone ? (
        <p style={{ color: "green" }}>{todoInfo.task}</p>
      ) : (
        <p style={{ color: "red" }}> {todoInfo.task} </p>
      )}

      {todoInfo.isEdited && (
        <UpdateTodo todoTask={todoInfo.task} todoid={todoInfo.id} />
      )}
      <button onClick={completeTodoHandler}>
        {todoInfo.isDone ? "Undone" : "Done"}
      </button>
      <button onClick={editHandler}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Todo;