import { isAuthenticated } from '@helpers/authentication';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. generic type <p> represent the type of prop

const withAuth = <p extends object>(Component: ComponentType<p>): ComponentType<p> => {
  const WrappedComponent = (props: p) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated()) {
        navigate('/sign-in');
      }
    }, [navigate]);

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuth;
