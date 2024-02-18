import React from "react";
import { FilterAll, FilterDone, FilterUndone } from "../Redux/todoSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(FilterAll());
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch(FilterDone());
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          dispatch(FilterUndone());
        }}
      >
        Undone
      </button>
    </div>
  );
};

export default Filter;