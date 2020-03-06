import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//条件渲染
let title = 'first lesson';

// ReactDOM.render(<h1 className="title">{true&&title}</h1>, document.getElementById("root"));

// ReactDOM.render(<h1 className="title">{true||title}</h1>, document.getElementById("root"));

//列表渲染
let data = ['1','2','3']


ReactDOM.render(<ul className="title">{data.map((item,index) => {
return <li key={index}>{item}</li>
})}</ul>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
