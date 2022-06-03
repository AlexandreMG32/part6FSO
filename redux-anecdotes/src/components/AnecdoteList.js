import { useSelector, useDispatch } from "react-redux";
import { createVote, voteAnecdote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
  setNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  let anecdotes = useSelector((state) => state.anecdotes);
  let filter = useSelector((state) => state.filter);
  anecdotes = [...anecdotes].sort((a, b) => (a.votes < b.votes ? 1 : -1));
  anecdotes = [...anecdotes].filter((a) => a.content.includes(filter));

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(setNotification(`${anecdote.content} voted`, 5000));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
