import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
// import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { RouterProvider } from 'react-router-dom';

//react-router-dom 초기 세팅
import { BrowserRouter } from 'react-router-dom';
=======
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
>>>>>>> 4d2f362 (Initialize project using Create React App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router} />
  </React.StrictMode>
);

=======
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 4d2f362 (Initialize project using Create React App)
reportWebVitals();
=======


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);


>>>>>>> 983af69 (:memo: README에디터 초안)
