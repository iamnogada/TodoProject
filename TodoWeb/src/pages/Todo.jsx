/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import PullToRefresh from "react-pull-to-refresh";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowDown,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import useTodoStore from "/src/store/todoStore";

function Todos() {
  const { todos, fetchTodos, addTodo, toggleTodo } = useTodoStore();
  const [todo, setTodo] = useState("hello");

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleRefresh = () => {
    fetchTodos();
  };
  const handleAddTodo = () => {
    if (!todo) return;
    addTodo({
      todo,
      status: "pending",
    });
    setTodo("");
  };
  const handleCheckboxChange = (e, item) => {
    console.log(
      `${e.target.checked ? "checked" : "unchecked"}: ${JSON.stringify(item)}`
    );
  };

  const RenderItem = ({ item }) => {
    return (
      <div className="flex bg-white shadow-md border-gray-500 m-2 p-4 items-center h-20">
        <input
          type="checkbox"
          className=" form-checkbox w-5 h-5"
          checked={item.status === "completed"}
          onChange={() => toggleTodo(item)}
        />
        {item.status === "completed" ? (
          <p className="ml-5 line-through">{item.todo}</p>
        ) : (
          <p className="ml-5">{item.todo}</p>
        )}
      </div>
    );
  };
  return (
    <div className="m-2 flex flex-col">
      <h1 className="text-xl">Todos List</h1>
      <div className="flex flex-row mt-4">
        <input
          type="text"
          placeholder="Enter todo..."
          className="grow h-10 p-2 mr-4  bg-gray-200 border-b border-solid border-gray-500"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="rounded-full items-center justify-center bg-blue-700 w-14 h-14"
          onClick={() => handleAddTodo()}
        >
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </button>
      </div>
      <div className="">
        <PullToRefresh onRefresh={handleRefresh}>
          {todos.map((item) => (
            <RenderItem item={item} key={item.id} />
          ))}
        </PullToRefresh>
      </div>
    </div>
  );
}

export default Todos;
