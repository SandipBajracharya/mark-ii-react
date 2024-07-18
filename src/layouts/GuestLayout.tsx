import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <>
      <div className="bg-[url('/images/groot.jpg')]">
        <Outlet />
      </div>
    </>
  );
};

export default GuestLayout;
