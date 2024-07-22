import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

// Pages
import Main from './pages/main/Main';
import Home from './pages/home/Home';
import MyProjects from './pages/myproject/MyProjects';
import ReadMe from './pages/readme/Readme';
import Retro from './pages/retro/Retro';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Main />,
        },
  
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'readme',
          element: <ReadMe />,
        },
        {
          path: 'retro',
          element: <Retro />,
        },
        {
          path: 'myProjects',
          element: <MyProjects />,
        },

      ],
    },
  ]);
  
  export default router;
  