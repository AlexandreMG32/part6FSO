import { useSelector, useDispatch } from "react-redux";
import { createVote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  let anecdotes = useSelector((state) => state.anecdotes);
  let filter = useSelector((state) => state.filter);
  anecdotes = [...anecdotes].sort((a, b) => (a.votes < b.votes ? 1 : -1));
  anecdotes = [...anecdotes].filter((a) => a.content.includes(filter));

  const vote = (anecdote) => {
    dispatch(createVote(anecdote.id));
    dispatch(createNotification(`${anecdote.content} voted`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
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
