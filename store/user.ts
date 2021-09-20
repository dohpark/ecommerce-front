import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  id: number;
  email: string;
  name: string;
};

const initialState: UserState = {
  id: 0,
  email: "",
  name: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    name: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
