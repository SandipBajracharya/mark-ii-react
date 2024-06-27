import { ReactNode } from 'react';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import PropTypes from 'prop-types';

// NOTE: not in use right now. Using Highest Order Component (withDashboardLayout)

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar />
          <main className="px-4 py-4 shadow-2 md:px-6 2xl:px-11">{children}</main>
        </div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
