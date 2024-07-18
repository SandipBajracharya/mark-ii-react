import Button from '@components/Button';
import AuthLogic from '@logics/Auth/auth.logic';

const Home: React.FC = () => {
  const { logout } = AuthLogic();

  return (
    <div className="w-100 h-screen flex items-center justify-center">
      <div className="text-white text-shadow-xl">
        <h1 className="font-bold text-5xl uppercase">
          {/* {`${user?.first_name ? user.first_name + ', ' : ''}`}Welcome to home page! */}
          Welcome Home!
        </h1>
        <div className="mt-5">
          <Button
            type="button"
            label="Logout"
            classes="bg-primary text-sm"
            onClickAction={logout}
          />
        </div>
        {/* <div className="mt-5">
          <h3 className="text-lg">Some useful links:</h3>
          <ul className="list-disc">
            <li>
              <Link to={'/dashboard'} className="hover:underline">
                {' '}
                Dashboard{' '}
              </Link>
            </li>
            <li>
              <Link to={'/users'} className="hover:underline">
                {' '}
                Users{' '}
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
