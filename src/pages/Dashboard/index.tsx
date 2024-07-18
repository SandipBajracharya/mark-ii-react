import withAuth from '@hocs/withAuth';
import withDashboardLayout from '@hocs/withDashboardLayout';

const Dashboard: React.FC = () => {
  return <>Hello there!</>;
};

export default withAuth(withDashboardLayout(Dashboard));
