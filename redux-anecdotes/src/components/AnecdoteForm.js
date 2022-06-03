import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import {
  createNotification,
  removeNotification,
  setNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";
import { connect } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = async (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(anecdote));
    dispatch(setNotification(`${anecdote} anecdote created`, 5000));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const ConnectedAnecdoteForm = connect()(AnecdoteForm);
export default ConnectedAnecdoteForm;
