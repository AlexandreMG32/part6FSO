import { useDispatch } from "react-redux";
import { changeFilter } from "../reducers/filterReducer";
import { connect } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const ConnectedFilter = connect()(Filter);
export default ConnectedFilter;
