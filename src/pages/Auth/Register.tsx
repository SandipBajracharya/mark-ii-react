import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lg:w-1/3 2xl:w-1/4">
        <div className="uppercase text-2xl mb-6 flex items-center justify-center gap-2.5">
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
        <div className="bg-white rounded-lg shadow-2xl">
          <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
            <form>
              {/* <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="first_name"
                >
                  First name
                </label>
                <input
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary text-sm"
                  id="first_name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="middle_name"
                >
                  Middle name
                </label>
                <input
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary text-sm"
                  id="middle_name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="last_name">
                  Last name
                </label>
                <input
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary text-sm"
                  id="last_name"
                />
              </div> */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary text-sm"
                  id="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary text-sm"
                  id="password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="retype_password"
                >
                  Re-type Password
                </label>
                <input
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary text-sm"
                  id="retype_password"
                  type="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2.5 px-4 rounded-sm">
                  Register
                </button>
              </div>
            </form>
            <div className="mt-5 text-md">
              <Link to="/sign-in" className="text-primary font-normal hover:underline text-sm">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
