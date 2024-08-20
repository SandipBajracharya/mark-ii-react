import { CreateUserPayload, UpdateUserPayload } from '@customTypes/user';
import { SubmitHandler, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
// import UserLogic from '@logics/User/user.logic';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from '@customTypes/validation';
import { useEffect } from 'react';
import Button from '@components/Button';
import InputField from '@components/InputField';
import { BasicObjectType } from '@customTypes/miscellaneous';
// import InputField from '@components/InputField';

const UserForm: React.FC<{
  isEdit?: boolean;
  id?: number | null;
  defaultValues?: UpdateUserPayload;
  onClickAction: (
    item: CreateUserPayload | UpdateUserPayload,
    id?: number,
  ) => Promise<BasicObjectType>;
}> = ({ isEdit = false, id = null, defaultValues = null, onClickAction }) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    unregister,
    control,
    formState: { errors },
  } = useForm<CreateUserPayload>({ defaultValues: defaultValues || {} });

  const navigate = useNavigate();
  // const { createUser, updateUser } = UserLogic();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  // const createOnSubmit = async (payload: CreateUserPayload) => {
  //   try {
  //     const response = await createUser(payload);
  //     toast.success(response.message);
  //     navigate('/users');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       toast.error(error.message);
  //     } else if (Array.isArray(error)) {
  //       error.map((err: ValidationError) => {
  //         if (setError) {
  //           setError(err.field, {
  //             type: 'server',
  //             message: err.message,
  //           });
  //         }
  //       });
  //     } else {
  //       toast.error('Something went wrong');
  //     }
  //   }
  // };

  // const updateOnSubmit = async (payload: UpdateUserPayload) => {
  //   try {
  //     if (id) {
  //       const response = await updateUser(payload, id);
  //       toast.success(response.message);
  //       navigate('/users');
  //     } else {
  //       toast.warning('User not found.');
  //       navigate('/users');
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       toast.error(error.message);
  //     } else if (Array.isArray(error)) {
  //       error.map((err: ValidationError) => {
  //         if (setError) {
  //           setError(err.field, {
  //             type: 'server',
  //             message: err.message,
  //           });
  //         }
  //       });
  //     } else {
  //       toast.error('Something went wrong');
  //     }
  //   }
  // };

  const actionOnSubmit = async (payload: CreateUserPayload | UpdateUserPayload) => {
    let response;
    try {
      if (isEdit && !id) {
        toast.warning('User not found.');
        navigate('/users');
        return;
      } else if (isEdit && id) {
        response = await onClickAction(payload, id);
      } else {
        response = await onClickAction(payload);
      }
      toast.success(response.message);
      navigate('/users');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else if (Array.isArray(error)) {
        error.map((err: ValidationError) => {
          if (setError) {
            setError(err.field, {
              type: 'server',
              message: err.message,
            });
          }
        });
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  const onSubmit: SubmitHandler<CreateUserPayload> = async (payload) => {
    if (isEdit) {
      unregister('password');
    }
    // else {
    //   await updateOnSubmit(payload);
    //   await createOnSubmit(payload);
    // }
    actionOnSubmit(payload);
  };

  return (
    <div className="p-6 shadow-md bg-white rounded-md">
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex lg:gap-9">
          <div className="w-full lg:w-1/3">
            <label htmlFor="first_name" className="mb-2.5 block text-black">
              First name
            </label>
            <input
              {...register('first_name', {
                required: 'First name is required',
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only alphabets are allowed',
                },
              })}
              type="text"
              placeholder="Enter your first name"
              className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.first_name ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'}`}
              id="first_name"
            />
            {errors.first_name && (
              <div
                role="alert"
                className="text-danger text-sm mt-2"
                aria-describedby="first_name-error"
              >
                <span id="first_name-error">{errors.first_name.message}</span>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            <label htmlFor="middle_name" className="mb-2.5 block text-black">
              Middle name
            </label>
            <input
              {...register('middle_name', {
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only alphabets are allowed',
                },
              })}
              type="text"
              placeholder="Enter your middle name"
              className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.middle_name ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'}`}
              id="middle_name"
            />
            {errors.middle_name && (
              <div role="alert" className="text-danger text-sm mt-2">
                {errors.middle_name.message}
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            <label htmlFor="last_name" className="mb-2.5 block text-black">
              Last name
            </label>
            <input
              {...register('last_name', {
                required: 'Last name is required',
                pattern: { value: /^[a-zA-Z]+$/, message: 'Only alphabets are allowed' },
              })}
              type="text"
              placeholder="Enter your last name"
              className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.last_name ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'}`}
              id="last_name"
            />
            {errors.last_name && (
              <div role="alert" className="text-danger text-sm mt-2">
                {errors.last_name.message}
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex lg:gap-9 mt-4">
          <div className="w-full lg:w-1/3">
            <label htmlFor="phone" className="mb-2.5 block text-black">
              Contact number
            </label>
            <input
              {...register('phone', { required: 'Contact number is required' })}
              type="text"
              placeholder="Enter your contact"
              className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.phone ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'}`}
              id="phone"
            />
            {errors.phone && (
              <div role="alert" className="text-danger text-sm mt-2">
                {errors.phone.message}
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            <label htmlFor="email" className="mb-2.5 block text-black">
              Email
            </label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="text"
              placeholder="Enter your email"
              className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.email ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'}`}
              id="email"
            />
            {errors.email && (
              <div role="alert" className="text-danger text-sm mt-2">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            <label htmlFor="password" className="mb-2.5 block text-black">
              Password
            </label>
            {/* INFO: use Controller when need to have more control over element. unregsiter works well with Controller as per my experience */}
            {/* <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  id="password"
                  {...field}
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition ${errors.password ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'}`}
                  disabled={isEdit}
                  placeholder={isEdit ? '**************' : 'Enter your password'}
                />
              )}
              rules={{ required: isEdit ? false : 'Password is required' }}
            />
            {errors.password && (
              <div className="text-danger text-sm mt-2">{errors.password.message}</div>
            )} */}
            <InputField
              defaultValue=""
              name="password"
              id="password"
              type="password"
              isEdit={isEdit}
              placeholder="Enter your password"
              rules={{ required: isEdit ? false : 'Password is required' }}
              control={control}
              disabled={isEdit}
            />
          </div>
        </div>
        <div className="mt-5">
          <Button type="submit" label={isEdit ? 'Update' : 'Add'} size="md" />
          <Button
            isPrimary={false}
            type="button"
            label="Cancel"
            size="md"
            classes="bg-danger ml-2"
            onClickAction={() => navigate('/users')}
          />
        </div>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  isEdit: PropTypes.bool,
  id: PropTypes.number,
  defaultValues: PropTypes.oneOfType([
    PropTypes.shape({
      email: PropTypes.string,
      first_name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
      last_name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
      middle_name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
      id: PropTypes.number,
    }),
    PropTypes.oneOf([null]),
  ]),
  onClickAction: PropTypes.func,
};

export default UserForm;
