import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/profile', element: <Profile /> },
];

export default routes;
