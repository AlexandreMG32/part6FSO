import { createSlice } from "@reduxjs/toolkit";

let timeoutId;

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

export const setNotification = (content, time) => {
  return (dispatch) => {
    dispatch(createNotification(content));
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(removeNotification());
    }, time);
  };
};

export default notificationSlice.reducer;
