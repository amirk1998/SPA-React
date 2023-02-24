import Blog from './Components/Blog/Blog';
import AboutUs from './Pages/AboutUs';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/profile', element: <Profile /> },
  { path: '/blogs', element: <BlogPage /> },
  { path: '/blogs/:id', element: <Blog /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
