import Breadcrumb from '@components/Breadcrumb';
import UserForm from './Form';
import withDashboardLayout from '@hocs/withDashboardLayout';
import withAuth from '@hocs/withAuth';

const UserAdd: React.FC = () => {
  const breadcrumbPath = [
    { name: 'Users', link: '/users' },
    { name: 'Add', link: '#' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <span>
          <h3 className="text-xl uppercase font-semibold text-gray-900">Add User</h3>
        </span>
        <Breadcrumb path={breadcrumbPath} />
      </div>
      <div className="mt-4">
        <UserForm />
      </div>
    </div>
  );
};

export default withAuth(withDashboardLayout(UserAdd));
