import withAuth from '@hocs/withAuth';
import withDashboardLayout from '@hocs/withDashboardLayout';

const Dashboard: React.FC = () => {
  return <>Hello there! Lets out some charts here. Alrighty?</>;
};

export default withAuth(withDashboardLayout(Dashboard));
