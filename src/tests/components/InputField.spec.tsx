import React from 'react';
import InputField from '@components/InputField';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

interface RenderWithFormProviderOptions {
  defaultValues?: Record<string, string | number>;
}

afterEach(cleanup);

describe('InputField component', () => {
  const renderWithFormProvider = (
    ui: React.ReactElement,
    { defaultValues }: RenderWithFormProviderOptions = {},
  ) => {
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const methods = useForm({ defaultValues });
      return <FormProvider {...methods}>{children}</FormProvider>;
    };
    return render(ui, { wrapper: Wrapper });
  };

  test('render InputField component', () => {
    renderWithFormProvider(
      <InputField name="name" type="text" id="name" isEdit={true} placeholder="Enter your name" />,
      { defaultValues: { name: 'Sandip' } },
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Sandip')).toBeInTheDocument();
  });

  // disabled
  test('render InputField component with disabled attribute', () => {
    renderWithFormProvider(<InputField name="name" type="text" id="name" disabled />, {
      defaultValues: { name: 'initial' },
    });
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toBeDisabled();

    fireEvent.input(input, { target: { value: 'Changed' } });
    expect(input.value).not.toBe('Changed'); // this will work only if you have condition onChange to prevent change if disabled. See InputField component
  });

  // rules (applicable only for react-hook-form, not only field)
  // test('render InputField component with rules', () => {
  //   renderWithFormProvider(
  //     <InputField name="name" type="text" rules={{ pattern: /^[a-zA-Z]+$/ }} id="name" />,
  //     {
  //       defaultValues: { name: 'initial' },
  //     },
  //   );
  //   const input = screen.getByRole('textbox') as HTMLInputElement;

  //   fireEvent.change(input, { target: { value: '123' } });
  //   expect(input).toHaveClass('border-danger');
  //   expect(screen.getByRole('alert')).toBeInTheDocument();
  // });
});
