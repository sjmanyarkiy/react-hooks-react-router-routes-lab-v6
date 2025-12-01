import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: "/",
    element: <Home />,
    errorelement: <ErrorPage />
    
  },
  {
    path: "/directors",
    element: <Directors />,
    errorelement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorelement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorelement: <ErrorPage />
  }
   
  ];

export default routes;