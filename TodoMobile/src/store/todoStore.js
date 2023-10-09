import { Platform } from 'react-native';
import { create } from 'zustand'
import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';

const API_URL = Platform.OS === 'ios'? 'http://127.0.0.1:5000': 'http://10.0.2.2:5000';

const useTodoStore = create((set) => ({
    todos: [],
    fetchTodos: async () => {
        try {
            const response = await fetch(
                `${API_URL}/todos?_sort=dateTime&_order=desc`
            );
            const todos = await response.json();
            set({ todos });
        }catch (error) {
            console.error('Error:', error);
        }
        
    },
    addTodo: (todo) => {
        todo.id = uuidv4();
        todo.dateTime = new Date().toISOString();
        console.log("TODO-store:"+JSON.stringify(todo));
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