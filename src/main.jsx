import React, { useContext, useEffect, createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/NavBar.jsx';
import Home, {LoaderHome} from './pages/Home.jsx';
import Movie, {loaderMovieId} from './pages/Movie.jsx';
import Films from './pages/Films.jsx';
import Reservar from './pages/reservar.jsx';
import Footer from './components/Footer.jsx';

export const GlobalStateContext = createContext();

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
        loader: LoaderHome
      },
      {
        path: '/film/:id',
        element: <Movie/>,
        loader: loaderMovieId
      },
      {
        path: '/films',
        element: <Films/>,
        loader: LoaderHome
      },
      {
        path: '/reservar',
        element : <Reservar/>
      }
    ]
  }
]);

function App() {
  const [globalState, setGlobalState] = useState([]);
  return (
    <React.StrictMode>
      <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
        <RouterProvider router={router} />
      </GlobalStateContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
