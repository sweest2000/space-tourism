import { createBrowserRouter } from 'react-router-dom';
import Crew from '../pages/Crew';
import Destination from '../pages/Destination';
import Home from '../pages/Home';
import Technology from '../pages/Technology';
import { routes } from './routerConfig';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.destination,
    element: <Destination />,
  },
  {
    path: routes.crew,
    element: <Crew />,
  },
  {
    path: routes.technology,
    element: <Technology />,
  },
]);
