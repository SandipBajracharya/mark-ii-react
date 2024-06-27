// import DefaultLayout from '@layouts/DefaultLayout';
// import { isAuthenticated } from '@helpers/authentication';
import DashboardRoutes from '@routes/DashboardRoutes';
import AuthRoutes from '@routes/AuthRoutes';

function App() {
  return (
    <div className="bg-lightGray">
      {/* {isAuthenticated() ? ( */}
      {/* <DefaultLayout> */}
      <DashboardRoutes />
      {/* </DefaultLayout> */}
      <AuthRoutes />
      {/* )} */}
    </div>
  );
}

export default App;
