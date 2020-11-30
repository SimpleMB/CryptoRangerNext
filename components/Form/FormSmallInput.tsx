type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const FormSmallInput: React.FC<InputProps> = ({
  label,
  type,
  name,
  register,
  required,
  defaultValue,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        ref={register({ required })}
        defaultValue={defaultValue}
        required={required}
      />
    </>
  );
};

export default FormSmallInput;
