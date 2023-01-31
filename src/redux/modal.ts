import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        createModal:(state, action)=>{

        },
        destroyeModal:(state)=>{

        }
    }
})