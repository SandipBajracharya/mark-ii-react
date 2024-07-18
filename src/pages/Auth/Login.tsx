import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { isAuthenticated } from '@helpers/authentication.helper';
import { AuthPayload } from '@customTypes/auth';
import AuthLogic from '@logics/Auth/auth.logic';
import Button from '@components/Button';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthPayload>();
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const { attemptLogin } = AuthLogic();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<AuthPayload> = async (data) => {
    try {
      await attemptLogin(data, setError);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/3 2xl:w-1/4">
        <div className="uppercase text-2xl mb-6 flex items-center justify-center gap-2.5 text-white text-shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          mark ii - react
        </div>
        <div className="bg-white rounded-lg shadow-2xl shadow-slate-600">
          <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  {...register('email', { required: 'Email is required' })}
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.email ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'} text-sm`}
                  id="email"
                />
                {errors.email && (
                  <div className="text-danger text-sm mt-2">{errors.email.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register('password', { required: 'Password is required' })}
                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.password ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'} text-sm`}
                    id="password"
                    type={hidePassword ? 'password' : 'text'}
                  />

                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 text-primary cursor-pointer hover:text-opacity-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                      onClick={() => setHidePassword(!hidePassword)}
                    >
                      {hidePassword ? (
                        <>
                          <path
                            fillRule="evenodd"
                            d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
                            clipRule="evenodd"
                          />
                          <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                        </>
                      ) : (
                        <>
                          <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path
                            fillRule="evenodd"
                            d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                            clipRule="evenodd"
                          />
                        </>
                      )}
                    </svg>
                  </span>
                </div>
                {errors.password && (
                  <div className="text-danger text-sm mt-2">{errors.password.message}</div>
                )}
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2.5 items-center">
                  <input
                    type="checkbox"
                    id="remember_me"
                    className="rounded border-[1.5px] border-stroke bg-transparent outline-none transition focus:border-primary active:border-primary text-sm"
                  />
                  <label className="block text-gray-700 text-sm font-normal" htmlFor="remember_me">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="text-primary text-sm font-normal hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" classes="bg-primary text-sm" label="Login" />
              </div>
            </form>
            <div className="mt-5 text-sm">
              No account yet? Sign Up{' '}
              <Link to="/sign-up" className="text-primary font-normal hover:underline">
                here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
