import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/resume',
    Component: ResumePage,
  },
]);
