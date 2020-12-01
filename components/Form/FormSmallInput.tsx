import styles from './FormSmallInput.module.scss';

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
  value,
}) => {
  console.log(value);
  return (
    <div className={[styles.smallInput, type === 'date' && styles.smallInputDate].join(' ')}>
      <label className={styles.smallInputLabel}>{label}</label>
      <input
        className={styles.smallInputField}
        type={type}
        name={name}
        ref={register({ required })}
        defaultValue={value}
        required={required}
      />
    </div>
  );
};

export default FormSmallInput;
