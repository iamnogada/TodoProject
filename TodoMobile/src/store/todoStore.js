import { create } from 'zustand'
import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';

const API_URL = 'http://localhost:5000';

const useTodoStore = create((set) => ({
    todos: [],
    fetchTodos: async () => {
        const response = await fetch(
            `${API_URL}/todos?_sort=dateTime&_order=desc`
        );
        const todos = await response.json();
        set({ todos });
    },
    addTodo: (todo) => {
        todo.id = uuidv4();
        todo.dateTime = new Date().toISOString();
        todo.status = "pending";

        fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then((data) => {
                set((state) => ({ todos: [data,...state.todos, ] }));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },
    removeTodo: (id) => {
        fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                }));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },
    toggleTodo: (updatedTodo) => {
        updatedTodo.status = updatedTodo.status === "pending" ? "completed" : "pending";
        fetch(`${API_URL}/todos/${updatedTodo.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        })
          .then(() => {
            set((state) => ({
              todos: state.todos.map((todo) =>{
                return todo.id === updatedTodo.id ? updatedTodo : todo
            }
              ),
            }));
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
}));
export default useTodoStore;