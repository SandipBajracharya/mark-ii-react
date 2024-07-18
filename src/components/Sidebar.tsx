import AuthLogic from '@logics/Auth/auth.logic';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { logout } = AuthLogic();
  return (
    <React.Fragment>
      <aside className="left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-slate-800 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 text-cyan-50">
        <div className="p-4 lg:px-6 h-full">
          <div>
            <h3 className="mb-4 font-semibold text-xl uppercase">MARK II - React</h3>
          </div>
          <div className="flex flex-col justify-between h-[90%]">
            <div className="mt-5 lg:mt-9 py-4">
              <h4 className="uppercase text-gray text-md">Menu</h4>
              <ul className="">
                <li className=" hover:bg-black">
                  <NavLink to="/dashboard" className="flex gap-2.5 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                      />
                    </svg>
                    Dashboard
                  </NavLink>
                </li>
                <li className=" hover:bg-black">
                  <NavLink to="/users" className="flex gap-2.5 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                    Users
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex gap-2.5 p-3 hover:bg-black cursor-pointer" onClick={logout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                />
              </svg>
              Logout
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
