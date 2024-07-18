import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';
import GuestLayout from '@layouts/GuestLayout';
import Forbidden from '@pages/Forbidden';
import Welcome from '@pages/Welcome';

// NOTE: for auth & normal routes, new layout format (provided by react-router-dom@6) is used

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Welcome />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="forbidden" element={<Forbidden />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
