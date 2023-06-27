import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './Context/Context';
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import {YourPage} from "./pages/YourPage" 
import All from './pages/All';
import Block from './pages/Block';




const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/all",
    element:<All/>
  },
  {
    path:"/your",
    element:<YourPage/>
  },
  {
    path:"/block",
    element:<Block/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <RouterProvider router= {router} />
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
