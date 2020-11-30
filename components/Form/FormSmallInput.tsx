import { Ref } from 'react';

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
  name,
  register,
  required,
  defaultValue,
}) => {
  return (
    <>
      <label>{label}</label>
      <input name={name} ref={register({ required })} defaultValue={defaultValue}/>
    </>
  );
};

export default FormSmallInput;
