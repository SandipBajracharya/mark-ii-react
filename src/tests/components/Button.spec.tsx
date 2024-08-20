import { fireEvent, render, screen } from '@testing-library/react';
import Button from '@components/Button';
import Icon from '@components/Icon';

describe('Button component', () => {
  const label = 'My button';

  test('render Button component', () => {
    render(<Button label={label} />);
    expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
  });

  test('button on click action', () => {
    const actionFunction = jest.fn(() => true);
    render(<Button label={label} title={label} onClickAction={actionFunction} />);

    // can be used screen.getByTitle(label) or screen.getByRole('button', { name: label })
    fireEvent.click(screen.getByRole('button', { name: label }));
    expect(actionFunction).toHaveBeenCalledTimes(1);
    expect(actionFunction).toHaveReturnedWith(true);
  });

  test('button with children', () => {
    const data = [
      { id: 1, name: 'User' },
      { id: 2, name: 'User2' },
    ];
    const actionFunction = jest.fn((id) => {
      const user = data.find((item) => item.id === id);
      return user ? user.name : null;
    });
    const { getByTitle } = render(
      <Button title={label} label={label} onClickAction={() => actionFunction(2)}>
        <Icon icon="eyeIcon" />
      </Button>,
    );

    // expect(screen.getByRole('graphics-document')).toBeInTheDocument(); // check if svg icon is in the document. Role: graphics-document doesnt work
    expect(getByTitle('Show')).toBeInTheDocument(); // Title is set in svg document and on that basis checking if the document is rendered
    fireEvent.click(getByTitle(label));
    expect(actionFunction).toHaveBeenCalledTimes(1);
    expect(actionFunction).toHaveBeenCalledWith(2); // expecting the argument to be 2
    expect(actionFunction).toHaveReturnedWith('User2'); // expecting the return value to be User2
  });

  // test('button with asynchronous request on click action', async () => {
  //   const mockAsyncTask = jest.fn();
  //   mockAsyncTask.mockResolvedValue('argument 1');

  //   render(<Button label={label} onClickAction={mockAsyncTask} />);

  //   const btn = screen.getByRole('button', { name: label });
  //   fireEvent.click(btn);
  //   await waitFor(() => expect(mockAsyncTask).toHaveBeenCalledTimes(1));
  // });
});

// things to know
// 1. getByRole() fn is inbuilt function from react testing library. Role is an elements represents their desired and default roles.
