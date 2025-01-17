import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TodoList.css";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const [tododata, setTodoData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [updatedTodoName, setUpdatedTodoName] = useState("");

  const addTodo = () => {
    const dateTime = new Date().toLocaleString();
    if (todoName) {
      const newTodo = {
        sno: tododata.length + 1,
        name: todoName,
        createdAt: dateTime,
      };
      setTodoData([...tododata, newTodo]);
      setTodoName("");
    }
  };

  const deleteTodo = (sno) => {
    const updatedTodos = tododata.filter((todo) => todo.sno !== sno);
    setTodoData(updatedTodos);
  };

  const editTodo = (index) => {
    setEditMode(index);
    setUpdatedTodoName(tododata[index].name);
  };

  const saveEdit = () => {
    const updatedTodos = [...tododata];
    updatedTodos[editMode].name = updatedTodoName;
    setTodoData(updatedTodos);
    setEditMode(null);
    setUpdatedTodoName("");
  };

  return (
    <>
      <Navbar />
      <main>
        <h1>Task 3 - Todo List</h1>
        <div className="todo-create">
          <input
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            placeholder="Enter todo name"
            required
          />
          <button onClick={addTodo}>Create Todo</button>
        </div>
        <div className="todo-table">
          <table>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Todo Name</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tododata.map((todo, index) => (
                <tr key={todo.sno}>
                  <td>{index + 1}</td>
                  <td>
                    {editMode === index ? (
                      <input
                        type="text"
                        className="edit-mode"
                        value={updatedTodoName}
                        onChange={(e) => setUpdatedTodoName(e.target.value)}
                      />
                    ) : (
                      todo.name
                    )}
                  </td>
                  <td>{todo.createdAt}</td>
                  <td className="action-buttons">
                    {editMode === index ? (
                      <button onClick={saveEdit}>
                        <FaSave />
                      </button>
                    ) : (
                      <button onClick={() => editTodo(index)}>
                        <FaEdit />
                      </button>
                    )}
                    <button onClick={() => deleteTodo(todo.sno)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TodoList;
