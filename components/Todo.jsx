import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className="flex justify-between capitalize my-2 p-4 bg-slate-100">
      <div className="flex">
        <input type="checkbox" />
        <p className="ml-2 cursor-pointer">{todo.text}</p>
      </div>
      <button className="flex items-center">
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
