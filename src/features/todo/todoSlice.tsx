import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface TodoState {
  todo: string[];
}

const initialState: TodoState = {
  todo: [
    'Learn React Native for Payment System',
    'To be one of the Best TeamLeads in my Team',
  ],
};

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.todo = [...state.todo, action.payload];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((obj, index) => index !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addItem, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
