import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import About from './components/About/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import BestBooks from './components/BestBooks.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<BestBooks />} />
      <Route path='/books' element={<BestBooks />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


