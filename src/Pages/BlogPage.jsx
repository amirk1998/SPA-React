import { Link, useLocation } from 'react-router-dom';

const blogPosts = [
  { name: 'blog -1', to: '/blogs/1' },
  { name: 'blog -2', to: '/blogs/2' },
  { name: 'blog -3', to: '/blogs/3' },
  { name: 'blog -4', to: '/blogs/4' },
];
const BlogPage = () => {
  // let location = useLocation();
  return (
    <div className='my-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <h2 className='text-center text-2xl'>Welcome to Blog Page</h2>
      <ul className='flex flex-col items-center justify-between'>
        {blogPosts.map((item) => {
          return (
            <li
              key={item.to}
              className='text-blue-500 hover:text-blue-700'
              // className={
              //   location.pathname === item.to
              //     ? '  text-red-500 '
              //     : 'text-slate-400 hover:text-slate-700 '
              // }
            >
              <Link to={{ pathname: item.to, search: 'sort=name' }}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
