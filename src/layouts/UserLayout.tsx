// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="bg-[url('/images/spidey.jpg')]">
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
