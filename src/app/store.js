import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "../features/todoReduser";

export const store = configureStore({
    reducer: todoReduser
})