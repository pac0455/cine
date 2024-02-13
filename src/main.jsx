import React, { useContext, useEffect, createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Movie, {loaderMovieId} from './pages/Movie.jsx';
import Films from './pages/Films.jsx';
import Reservar from './pages/reservar.jsx';
import Footer from './components/Footer.jsx';
import {Provider} from 'react-redux';
import {store} from './redux/store.js';
import Favoritos  from './pages/Favoritos.jsx';
import Entradas from './pages/Entradas.jsx';

function AppLayout(){
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/film/:id',
        element: <Movie/>,
        loader: loaderMovieId
      },
      {
        path: '/films',
        element: <Films/>,
      },
      {
        path: '/reservar/:id',
        element : <Reservar/>
      },
      {
        path: '/favoritos',
        element : <Favoritos/>
      },
      {
        path: '/entradas',
        element : <Entradas/>
      }
    ]
  }
]);

function App() {
  const [globalState, setGlobalState] = useState([]);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
