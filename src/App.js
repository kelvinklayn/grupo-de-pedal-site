import React from 'react';
import './App.css';
// Exemplo de uso

import { createBrowserRouter  , RouterProvider,} from "react-router-dom";

import Home from './routes/Home';
import Sobre from './routes/Sobre';
import Galeria from './routes/Galeria';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/galeria",
    element: <Galeria/>
  },
  {
    path: "/sobre",
    element: <Sobre/>
  },
])

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
