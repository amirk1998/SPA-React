import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='mt-8 flex flex-col items-center justify-center w-3/4 bg-white h-[200px] rounded-lg'>
      <p className='text-center text-2xl'>This is About us Page</p>
      <Link to='/' className='text-violet-500 hover:text-violet-700'>
        Go to Home Page
      </Link>
    </div>
  );
};

export default AboutUs;

// import React from 'react';

// function AboutUs(props) {
//   return (
//     <div>
//       <p>This is About us Page</p>
//     </div>
//   );
// }

// export default AboutUs;
