import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Layout className='my-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <p className='text-center text-2xl'>Welcome to Profile Amir</p>
      <Link to='/' className='text-violet-500 hover:text-violet-700 my-2'>
        Go to Home Page
      </Link>
    </Layout>
  );
};

export default Profile;
