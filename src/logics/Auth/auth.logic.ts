import axios from 'axios';
import { AuthPayload } from '@customTypes/auth';
import { UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '@services/authService';
import { User } from '@customTypes/user';
import { useAuth } from '@hooks/useAuth';

function AuthLogic() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const redirectAfterLogin = (user: User) => {
    if (user) {
      if (user.role_id === 1) {
        navigate('/home');
      } else if (user.role_id === 2) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    }
  };

  const comparePasswordRetype = (password: string | null, confirmPassword: string | undefined) => {
    return password === confirmPassword || 'Passwords do not match';
  };

  const attemptLogin = async (data: AuthPayload, setError: UseFormSetError<AuthPayload>) => {
    try {
      await loginUser(data);
      const accessToken = localStorage.getItem('accessToken');
      const storedUserInfo = localStorage.getItem('userInfo');
      const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
      setAuth({ userInfo, accessToken });
      userInfo ? redirectAfterLogin(userInfo) : navigate('/');
      toast.success('Login success');
    } catch (error) {
      console.log({ error });
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        const err = error;
        msg = err.response?.data?.message || msg;
      }
      setError('password', {
        type: 'server',
        message: msg,
      });
    }
  };

  const userRegistration = async (data: AuthPayload, setError: UseFormSetError<AuthPayload>) => {
    try {
      await registerUser(data);
      toast.success('Success! Verification email has been sent to your email address. Thank you!');
      navigate('/sign-in');
    } catch (error) {
      let msg = 'Something went wrong';
      if (axios.isAxiosError(error) && error.response) {
        const err = error;
        msg = err.response?.data?.message || msg;
      }
      setError('email', {
        type: 'server',
        message: msg,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    setAuth(null);
    navigate('/sign-in');
  };

  return { comparePasswordRetype, attemptLogin, logout, userRegistration };
}

export default AuthLogic;
