import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, inpTodo } from "./features/todoReduser";
import './styles.css'

function App() {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.todos);
  const [text, setText] = useState("");


  const hendleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    dispatch(addTodo(text));
  };

  const handleDelete = (i) => {
    dispatch(deleteTodo({id: i}))
  };

  const handleChecked = (index) => {
    dispatch(inpTodo({id: index}))
  }
  return (
    <div>
      <form className="form" onSubmit={hendleSubmit}>
        <input className="inp" value={text} onChange={handleSetText} />
        <button className="btn" onClick={handleAdd} disabled={!text ? true : false }>добавить</button>
      </form>
      {array.map((item, index) => {
        return (
          <div className="divText">
            {" "}
            <input type={"checkbox"} checked={item.completed} onChange={()=> {handleChecked(index)}} /> <span className="textTodo">{item.text}</span>{" "}
            <button className="btn2"
              onClick={() => {
                handleDelete(index);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
