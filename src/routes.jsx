import Blog from './Components/Blog/Blog';
import AboutUs from './Pages/AboutUs';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import PostPage from './Pages/PostPage';
import Profile from './Pages/Profile';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/profile', element: <Profile /> },
  { path: '/blogs', element: <BlogPage /> },
  { path: '/blogs/:id', element: <Blog /> },
  { path: '/posts/:id?', element: <PostPage /> },
  { path: '*', element: <NotFound /> },
];

export default routes;

// RegEx => ([A-Za-z])
// In V6 React Router Dom , We can NOT use RegEx Expression anymore !!!
