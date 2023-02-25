import { Link } from 'react-router-dom';
import queryString from 'query-string';
import withRouter from '../HOC/withRouter';

const Blog = ({ location, params }) => {
  // console.log('Blog Comp => location is : ', location.search);
  const query = queryString.parse(location.search);
  console.log(query);
  const id = params.id;
  // console.log(id);
  return (
    <div className='my-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <h2 className='text-center text-2xl'>Blog Details - id= {id}</h2>
      <p className='text-center text-lg text-slate-700 mt-2'>
        Lorem ipsum dolor sit amet.
      </p>
      <Link
        to={{ pathname: `/blogs/${parseInt(id) + 1}`, search: 'sort=name' }}
        className='text-emerald-500 hover:text-emerald-700 my-2'
      >
        Go to next Blog Page
      </Link>
      <Link to='/blogs' className='text-violet-500 hover:text-violet-700 my-2'>
        Go to Blog Page
      </Link>
    </div>
  );
};

export default withRouter(Blog);
