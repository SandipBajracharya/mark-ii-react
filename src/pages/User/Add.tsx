import Breadcrumb from '@components/Breadcrumb';
import UserForm from './Form';
import withDashboardLayout from '@hocs/withDashboardLayout';
import withAuth from '@hocs/withAuth';
import UserLogic from '@logics/User/user.logic';
// import { BasicObjectType } from '@customTypes/miscellaneous';
import PropTypes from 'prop-types';

type UserAddProps = {
  onSubmit?: () => Promise<void>;
};

const UserAdd: React.FC<UserAddProps> = ({ onSubmit = null }) => {
  const breadcrumbPath = [
    { name: 'Users', link: '/users' },
    { name: 'Add', link: '#' },
  ];

  const { createUser } = UserLogic();

  return (
    <div>
      <div className="flex items-center justify-between">
        <span>
          <h3 className="text-xl uppercase font-semibold text-gray-900">Add User</h3>
        </span>
        <Breadcrumb path={breadcrumbPath} />
      </div>
      <div className="mt-4">
        <UserForm onClickAction={onSubmit || createUser} />
      </div>
    </div>
  );
};

UserAdd.propTypes = {
  onSubmit: PropTypes.func,
};

export default withAuth(withDashboardLayout(UserAdd));
