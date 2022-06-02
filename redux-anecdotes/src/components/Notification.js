import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notifications);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return notification ? <div style={style}>{notification}</div> : <div></div>;
};

export default Notification;
