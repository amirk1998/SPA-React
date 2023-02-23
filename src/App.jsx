import { Profiler, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AboutUS from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import Layout from './Layout/Layout';
// 1.home => /
// 2.AboutUs => '/about-us'

function App() {
  return (
    <Layout>
      <div className='bg-neutral-100 text-slate-900 flex flex-col items-center mx-8 p-8 font-[Montserrat]'>
        <Routes>
          <Route path='/' exact={true} element={<HomePage />} />
          <Route path='/about-us' element={<AboutUS />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
