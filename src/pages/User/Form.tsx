const UserForm: React.FC = () => {
  return (
    <div className="p-6 shadow-md bg-white rounded-md">
      <form action="">
        <div className="flex gap-9">
          <div className="w-full sm:w-1/3">
            <label className="mb-2.5 block text-black">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <label className="mb-2.5 block text-black">Middle name</label>
            <input
              type="text"
              placeholder="Enter your middle name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <label className="mb-2.5 block text-black">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
        </div>
        <div className="flex gap-9 mt-4">
          <div className="w-full sm:w-1/3">
            <label className="mb-2.5 block text-black">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <label className="mb-2.5 block text-black">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <label className="mb-2.5 block text-black">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="bg-primary hover:bg-opacity-90 uppercase text-gray py-2 px-4 rounded-md text-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
