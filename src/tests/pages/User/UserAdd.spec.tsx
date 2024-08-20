import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserAdd from '@pages/User/Add';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react';

describe('UserAdd page', () => {
  test('render UserAdd page', () => {
    render(
      // need to use MemoryRouter because of the use of useNavigate hook
      <MemoryRouter>
        <UserAdd />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: 'Add User' })).toBeInTheDocument();

    // check for breadcrumb
    expect(screen.getByTestId('Users-breadcrumb')).toBeInTheDocument();
    expect(screen.getByTestId('Add-breadcrumb')).toBeInTheDocument();
  });

  test('render and submit page without filling form', async () => {
    const handleMockSubmit = jest.fn();
    render(
      <MemoryRouter initialEntries={['/users/add']}>
        <UserAdd onSubmit={handleMockSubmit} />
      </MemoryRouter>,
    );
    const form = screen.getByRole('form') as HTMLFormElement;
    expect(form).toBeInTheDocument();
    const submitButton = screen.getByRole('button', { name: 'Add' });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(async () => {
      expect(await screen.findAllByRole('alert')).toHaveLength(5); // throw error and error block when form is not filled
      expect(handleMockSubmit).toHaveBeenCalledTimes(0);
    });
  });

  test('render and submit page with filling form', async () => {
    const mockSubmit = jest.fn();
    render(
      <MemoryRouter initialEntries={['/users/add']}>
        <UserAdd onSubmit={mockSubmit} />
      </MemoryRouter>,
    );

    const form = screen.getByRole('form') as HTMLFormElement;
    await act(async () => {
      // enter values in form
      fireEvent.change(screen.getByLabelText('First name'), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByLabelText('Last name'), {
        target: { value: 'Doe' },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'john.doe@gmail.com' },
      });
      fireEvent.change(screen.getByLabelText('Password'), {
        target: { value: '123456' },
      });
      fireEvent.change(screen.getByLabelText('Contact number'), {
        target: { value: '1234567890' },
      });
      fireEvent.submit(form);
    });

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledTimes(1); // throw error when form is not filled
      expect(mockSubmit).toHaveBeenCalledWith({
        first_name: 'John',
        middle_name: '',
        last_name: 'Doe',
        email: 'john.doe@gmail.com',
        password: '123456',
        phone: '1234567890',
      });
      expect(screen.queryAllByRole('alert')).toHaveLength(0);
    });
  });

  test('submit form and validation error', async () => {
    const mockSubmit = jest.fn().mockResolvedValue({ message: 'success' });
    render(
      <MemoryRouter initialEntries={['/users/add']}>
        <UserAdd onSubmit={mockSubmit} />
      </MemoryRouter>,
    );

    const form = screen.getByRole('form') as HTMLFormElement;

    await act(async () => {
      fireEvent.change(screen.getByLabelText('First name'), {
        target: { value: 'John123' },
      });
      fireEvent.change(screen.getByLabelText('Last name'), {
        target: { value: 'Doe' },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'john.doe@gmail.com' },
      });
      fireEvent.change(screen.getByLabelText('Password'), {
        target: { value: '123456' },
      });
      fireEvent.change(screen.getByLabelText('Contact number'), {
        target: { value: '1234567890' },
      });
      fireEvent.submit(form);
    });

    await waitFor(async () => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(
        screen.getByRole('alert', { description: 'Only alphabets are allowed' }), // aria-describedby = first_name-error
      ).toBeInTheDocument();
    });
  });
});
