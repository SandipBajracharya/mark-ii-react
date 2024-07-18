import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';
import UserRoutes from './UserRoutes';

const MainRoutes = () => {
  return (
    <>
      <AuthRoutes />
      <UserRoutes />
      <DashboardRoutes />
    </>
  );
};

export default MainRoutes;
