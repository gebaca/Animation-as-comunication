import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Paper from '../pages/paper/Paper';
import Screen from '../pages/screen/Screen';

const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(Paper),
  },
  {
    path: '/screen',
    element: React.createElement(Screen),
  },
]);

export default router;
