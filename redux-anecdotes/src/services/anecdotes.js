import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (anecdote) => {
  const newAnecdote = { content: anecdote, votes: 0 };
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const vote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  let votedAnecdote = response.data;
  votedAnecdote = { ...votedAnecdote, votes: votedAnecdote.votes + 1 };
  await axios.put(`${baseUrl}/${id}`, votedAnecdote);
  return votedAnecdote;
};

export default { getAll, createNew, vote };
