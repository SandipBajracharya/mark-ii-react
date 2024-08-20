import Breadcrumb from '@components/Breadcrumb';
import Loading from '@components/Loading';
import SimpleDialog from '@components/SimpleDialog';
import Table from '@components/Table';
import { TableActionType } from '@customTypes/user';
import withAuth from '@hocs/withAuth';
import withDashboardLayout from '@hocs/withDashboardLayout';
import UserLogic from '@logics/User/user.logic';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// type vs interface 1. type can use complex enum type like isLoading: 'active' | 'inactive'

const User: React.FC = () => {
  const breadcrumbPath = [{ name: 'Users', link: '#' }];

  const { getUserList, deleteUser, tableHeaders } = UserLogic();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [idContainer, setIdContainer] = useState<number | null>(null);

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, isLoading } = useQuery({ queryKey: ['getUserList'], queryFn: getUserList });

  // Mutations
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (resp) => {
      // Invalidate and refetch
      toast.success(resp.message);
      queryClient.invalidateQueries({ queryKey: ['getUserList'] });
    },
    onError: (error) => {
      toast.success(error.message);
      console.log({ error });
    },
  });

  const performDeletePrompt = (id: number) => {
    setOpenDialog(true);
    setIdContainer(id);
  };

  const deleteAction = (id: number) => {
    mutation.mutate(id);
    setOpenDialog(false);
    setIdContainer(null);
  };

  const actions: Array<TableActionType> = [
    { name: 'Edit', icon: 'penIcon', action: (id) => navigate(`/user-edit/${id}`) },
    { name: 'Delete', icon: 'trashIcon', action: performDeletePrompt },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2.5 items-center">
          <span>
            <h3 className="text-xl uppercase font-semibold text-gray-900">Users</h3>
          </span>
          <span>
            <NavLink to="/user-add" className="flex gap-1" title="Add new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:bg-opacity-90 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </NavLink>
          </span>
        </div>
        <Breadcrumb path={breadcrumbPath} />
      </div>
      <div className="rounded-sm border border-stroke bg-white px-5 py-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-5 mt-4">
        <div className="max-w-full overflow-x-auto">
          {!isLoading ? (
            <Table headers={tableHeaders} records={data || null} actions={actions} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {openDialog && (
        <SimpleDialog
          isOpen={openDialog}
          title="Confirm delete"
          description="Are you sure to delete this user? Once deleted, It will not be recoverable."
          affirmativeAction={() => deleteAction(idContainer)}
          negativeAction={() => {
            setOpenDialog(false);
            setIdContainer(null);
          }}
        />
      )}
    </>
  );
};

export default withAuth(withDashboardLayout(User));
