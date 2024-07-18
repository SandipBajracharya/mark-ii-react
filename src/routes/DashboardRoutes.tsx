import { Route, Routes } from 'react-router-dom';
import User from '@pages/User';
import UserAdd from '@pages/User/Add';
import UserEdit from '@pages/User/Edit';
import Dashboard from '@pages/Dashboard';
import ProtectedRoute from '@components/ProtectedRoute';

// NOTE: for dashboard routes, Hight Order Component is used to wrap layout and authenticate check login

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute roles={[2]} />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-add" element={<UserAdd />} />
        <Route path="user-edit/:id" element={<UserEdit />} />
        <Route path="users" element={<User />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
