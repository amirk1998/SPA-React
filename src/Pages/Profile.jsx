import Layout from '../Layout/Layout';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import Dashboard from '../Components/Dashboard/Dashboard';
import Download from '../Components/Download/Download';

const Profile = () => {
  return (
    <div className='my-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <p className='text-center text-2xl'>Welcome to Profile Amir</p>
      <Sidebar />
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='download' element={<Download />} />
      </Routes>
      <Link to='/' className='text-violet-500 hover:text-violet-700 my-2'>
        Go to Home Page
      </Link>
    </div>
  );
};

export default Profile;
