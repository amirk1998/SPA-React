import { Link } from 'react-router-dom';
import withRouter from '../HOC/withRouter';

const Blog = (props) => {
  const id = props.params.id;
  console.log(id);
  return (
    <div className='my-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <h2 className='text-center text-2xl'>Blog Details - id= {id}</h2>
      <p className='text-center text-lg text-slate-700 mt-2'>
        Lorem ipsum dolor sit amet.
      </p>
      <Link to='/blogs' className='text-violet-500 hover:text-violet-700 my-2'>
        Go to Blog Page
      </Link>
    </div>
  );
};

export default withRouter(Blog);
