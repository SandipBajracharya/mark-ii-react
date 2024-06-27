import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
    </Routes>
  );
};

export default AuthRoutes;
