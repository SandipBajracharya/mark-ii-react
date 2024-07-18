import ProtectedRoute from '@components/ProtectedRoute';
import UserLayout from '@layouts/UserLayout';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router-dom';

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute roles={[1]} />}>
        <Route path="home" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
