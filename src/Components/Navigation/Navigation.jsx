import { Link, NavLink, useLocation } from 'react-router-dom';
import withRouter from '../HOC/withRouter';

const items = [
  { name: 'Home', to: '/', exact: true },
  { name: 'About-Us', to: '/about-us' },
  { name: 'Profile', to: '/profile' },
];

const Navigation = (props) => {
  let location = useLocation();
  console.log(props);

  return (
    <nav>
      <ul className='flex flex-row items-center justify-evenly'>
        {items.map((item) => {
          return (
            <li
              key={item.to}
              className={
                location.pathname === item.to
                  ? '  text-red-500 '
                  : 'text-slate-400 hover:text-slate-700 '
              }
            >
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  //__________________________
  // return (
  //   <nav>
  //     <ul className='flex flex-row items-center justify-evenly'>
  //       <li>
  //         <Link
  //           to='/'
  //           className={
  //             location.pathname === '/'
  //               ? '  text-red-500 '
  //               : 'text-slate-400 hover:text-slate-700 '
  //           }
  //         >
  //           Home
  //         </Link>
  //       </li>
  //       <li>
  //         <Link
  //           to='/about-us'
  //           className={
  //             location.pathname === '/about-us'
  //               ? ' text-red-500 '
  //               : 'text-slate-400 hover:text-slate-700 '
  //           }
  //         >
  //           About Us
  //         </Link>
  //       </li>
  //       <li>
  //         <Link
  //           to='/profile'
  //           className={
  //             location.pathname === '/profile'
  //               ? ' text-red-500 '
  //               : 'text-slate-400 hover:text-slate-700 '
  //           }
  //         >
  //           Profile
  //         </Link>
  //       </li>
  //     </ul>
  //   </nav>
  // );
};

export default withRouter(Navigation);
