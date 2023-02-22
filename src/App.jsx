import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navigation from './Components/Navigation';
import AboutUS from './Pages/AboutUs';
import HomePage from './Pages/HomePage';

// 1.home => /
// 2.AboutUs => '/about-us'

function App() {
  return (
    <div className='bg-neutral-100 text-slate-900 flex flex-col items-center h-[100vh] w-full pt-8 font-[Montserrat]'>
      <Navigation />
      <Routes>
        <Route path='/' exact={true} element={<HomePage />} />
        <Route path='/about-us' element={<AboutUS />} />
      </Routes>
    </div>
  );
}

export default App;
