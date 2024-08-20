import Breadcrumb from '@components/Breadcrumb';
import UserForm from './Form';
import withDashboardLayout from '@hocs/withDashboardLayout';
import withAuth from '@hocs/withAuth';
import { useQuery } from '@tanstack/react-query';
import UserLogic from '@logics/User/user.logic';
import { useParams } from 'react-router-dom';
import Loading from '@components/Loading';

const UserEdit: React.FC = () => {
  const breadcrumbPath = [
    { name: 'Users', link: '/users' },
    { name: 'Edit', link: '#' },
  ];
  const params = useParams();
  const userId = parseInt(params.id); //TODO: get userId from url
  const { getSingleUser, updateUser } = UserLogic();

  const { data, isLoading } = useQuery({
    queryKey: ['getOneUser'],
    queryFn: () => getSingleUser(userId),
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <span>
          <h3 className="text-xl uppercase font-semibold text-gray-900">Edit User</h3>
        </span>
        <Breadcrumb path={breadcrumbPath} />
      </div>
      <div className="mt-4">
        {!isLoading ? (
          <>
            <UserForm
              isEdit={true}
              id={userId}
              defaultValues={data.data}
              onClickAction={updateUser}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default withAuth(withDashboardLayout(UserEdit));
