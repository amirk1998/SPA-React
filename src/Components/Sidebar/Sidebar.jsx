import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul className='bg-gray-300 rounded-xl flex items-center justify-between w-[50vh] h-14 px-10 py-2 my-2'>
        <li>
          <NavLink
            to='/profile/dashboard'
            className={(navData) =>
              navData.isActive
                ? 'text-red-500 '
                : 'text-slate-600 hover:text-slate-800'
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile/download'
            className={(navData) =>
              navData.isActive
                ? 'text-red-500 '
                : 'text-slate-600 hover:text-slate-800'
            }
          >
            Download
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
