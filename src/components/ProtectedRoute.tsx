import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '@hooks/useAuth';
// import { useEffect } from 'react';
// import { isAuthenticated } from '@helpers/authentication.helper';
// import { getDecodedUserInfo } from '@utils/authUtils';
// import { CustomJwtPayload } from '@customTypes/auth';
// import { formatUserData } from '@helpers/user.helper';

interface ProtectedRouteType {
  roles?: (number | null | undefined)[];
}

const ProtectedRoute: React.FC<ProtectedRouteType> = ({ roles }) => {
  const { auth } = useAuth();
  return roles?.includes(auth?.userInfo?.role_id) ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/forbidden" />
  ) : (
    <Navigate to="/sign-in" />
  );
};

ProtectedRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])])),
};

export default ProtectedRoute;
