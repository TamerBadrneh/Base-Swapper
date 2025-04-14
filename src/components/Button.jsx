import { Link } from "react-router-dom";

export default function Button({ children, type, onClickHandler, link }) {

  let btn = (
    <button onClick={onClickHandler} className={`btn ${type} rounded`}>
      {children}
    </button>
  );

  return link ? <Link to={link}>{btn}</Link> : btn;
}
