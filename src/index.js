import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';

// import reportWebVitals from './reportWebVitals';
//pwa  通过写网页的形式写手机app的应用
// http:协议的服务器上  断网的话还是可以看见浏览器之中

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
