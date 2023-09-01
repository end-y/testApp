import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './Screens/Detail';
import Main from './Screens/Main';
import { Provider } from 'react-redux';
import store from './Reducers/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path: "/",
      element: <Main />,
      children:[
        {
          path:"/detail/:detailId/edit",
          element: <Detail edit={true} newPost={false} />
        },
        {
          path:"/detail/:detailId",
          element: <Detail edit={false} newPost={false}  />
        },
        {
          path:"/detail/new",
          element: <Detail edit={false} newPost={true} />
        }
      ]
    }]
  },
  ,
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
