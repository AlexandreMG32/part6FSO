import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: null,
  reducers: {
    createNotification(state, action) {
      const message = action.payload;
      return message;
    },
    removeNotification(state, action) {
      return null;
    },
  },
});

export const { createNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
