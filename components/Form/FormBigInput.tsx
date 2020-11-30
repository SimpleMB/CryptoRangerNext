type RefReturn =
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const FormSmallInput: React.FC<InputProps> = ({
  label,
  name,
  register,
  required,
  defaultValue,
  rows,
}) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        name={name}
        ref={register({ required })}
        defaultValue={defaultValue}
        required={required}
        rows={rows || 5}
      />
    </>
  );
};

export default FormSmallInput;
