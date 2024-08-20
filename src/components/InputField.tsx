import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> extends UseControllerProps<T> {
  id: string;
  isEdit?: boolean;
  placeholder?: string;
  type?: string;
}

const InputField = <T extends FieldValues>({
  name,
  type = 'text',
  control,
  id,
  isEdit = false,
  placeholder = 'Enter your password',
  defaultValue,
  rules,
  disabled = false,
}: InputFieldProps<T>) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <div>
      <input
        type={type}
        name={name}
        ref={ref}
        {...inputProps}
        id={id}
        onChange={(e) => {
          if (!disabled) inputProps.onChange(e); // prevent change if disabled
        }}
        placeholder={isEdit && name === 'password' ? '********' : placeholder}
        value={inputProps.value}
        onBlur={inputProps.onBlur}
        disabled={disabled}
        className={`w-full rounded border-[1.5px] py-3 px-5 text-black outline-none transition ${error ? 'focus:border-danger active:border-danger border-danger' : 'border-stroke focus:border-primary active:border-primary'} ${disabled ? 'bg-gray text-slate-500' : 'bg-transparent'}`}
      />
      {rules && invalid && (
        <div role="alert" className="text-danger text-sm mt-2">
          {error?.message}
        </div>
      )}
    </div>
  );
};

export default InputField;
