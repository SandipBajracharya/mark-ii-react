import { ComponentType } from 'react';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';

const withDashboardLayout = <p extends object>(Component: ComponentType<p>): ComponentType<p> => {
  const WrappedComponent = (props: p) => {
    return (
      <div className="">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Navbar />
            <main className="px-4 py-4 shadow-2 md:px-6 2xl:px-11">
              <Component {...props} />
            </main>
          </div>
        </div>
      </div>
    );
  };

  return WrappedComponent;
};

export default withDashboardLayout;
