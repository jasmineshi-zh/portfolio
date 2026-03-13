import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/resume',
        Component: ResumePage,
      },
    ],
  },
]);
