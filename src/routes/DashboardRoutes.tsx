import { Route, Routes } from 'react-router-dom';
import User from '@pages/User';
import UserAdd from '@pages/User/Add';
import Dashboard from '@pages/Dashboard';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/user-add" element={<UserAdd />} />
      <Route path="/users" element={<User />} />
    </Routes>
  );
};

export default DashboardRoutes;
