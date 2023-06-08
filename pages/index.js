import Todo from "@/components/Todo";
import { db } from "@/firebase";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid text");
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput('')
  
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos",id));
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
 

  return (
    <main
      className={`h-screen w-screen p-4 bg-gradient-to-r from-[#7A3E3E] to-[#482121]`}
    >
      <Head>
        <title>ToDo App</title>
      </Head>
      <div className="bg-white shadow-lg rounded-lg p-4  max-w-[500px] m-auto ">
        <h3 className="text-3xl font-bold text-center text-gray-800 p-2">
          TASK-KILLER
        </h3>
        <form onSubmit={createTodo} className="flex justify-between">
          <input
            onChange={handleChange}
            value={input}
            className=" w-full border p-2  text-xl "
            type="text"
            placeholder="Add a task please"
          />
          <button  onClick={createTodo} className="p-4 border ml-2 bg-[brown] text-white">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <Todo key={i} todo={todo} toggleComplete={toggleComplete} deletee={deleteTodo} />
          ))}
        </ul>
        <p className="text-center p-2">You have {todos.length} Tasks</p>
      </div>
    </main>
  );
}
