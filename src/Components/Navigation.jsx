import { Link } from 'react-router-dom';
import withRouter from './HOC/withRouter';

const Navigation = (props) => {
  console.log(props);
  return (
    <header>
      <nav>
        <ul className='flex flex-row items-center justify-evenly w-60'>
          <li>
            <Link to='/' className='text-blue-500 hover:text-blue-700'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about-us' className='text-blue-500 hover:text-blue-700'>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
