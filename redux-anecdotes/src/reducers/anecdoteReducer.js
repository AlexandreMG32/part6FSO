import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      const anecdote = action.payload;
      state.push(anecdote);
    },
    createVote(state, action) {
      const votedAnecdote = action.payload;
      return state.map((s) => (s.id == votedAnecdote.id ? votedAnecdote : s));
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addAnecdote, createVote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(addAnecdote(newAnecdote));
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    const changedAnecdote = await anecdotesService.vote(id);
    dispatch(createVote(changedAnecdote));
  };
};

export default anecdoteSlice.reducer;
