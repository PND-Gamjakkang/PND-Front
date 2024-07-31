import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

// Pages
import Main from './pages/main/Main';
import MyProjects from './pages/myproject/MyProjects';
import ReadMe from './pages/readme/Readme';
import Retro from './pages/retro/Retro';
import Team from './pages/Team/Team';

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
        {
          path: 'team',
          element: <Team />,
        },
      ],
    },
  ]);
  
  export default router;
  