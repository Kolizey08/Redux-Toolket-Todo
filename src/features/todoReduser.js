import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const addTodo = createAction("add");
export const deleteTodo = createAction("delete");
export const inpTodo = createAction("i");

const todoReduser = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter((item, index) => {
        return index !== action.payload.id;
      });
    })
    .addCase(inpTodo, (state, action) => {
      state.todos.map((item, index) => {
        if (index === action.payload.id) {
          item.completed = !item.completed;
        }
      });
    });
});

export default todoReduser;
