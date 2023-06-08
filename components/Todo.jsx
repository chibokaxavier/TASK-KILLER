import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo, toggleComplete, deletee }) => {
  return (
    <li
      className={`${
        todo.completed
          ? "flex justify-between capitalize my-2 p-4 bg-slate-400"
          : "flex justify-between capitalize my-2 p-4 bg-slate-100"
      }`}
    >
      <div className="flex">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed === true}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={` ${
            todo.completed
              ? " ml-2 cursor-pointer line-through"
              : "ml-2 cursor-pointer"
          }`}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deletee(todo.id)} className="flex items-center">
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
