import React from 'react';
import Layout from '../Layout/Layout';

function NotFound(props) {
  return (
    <Layout className='mt-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <p className='text-center text-2xl text-red-400'>
        This Page is not found !!!
      </p>
    </Layout>
  );
}

export default NotFound;
