import styles from './FormSmallInput.module.scss';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, // eslint-disable-line
  HTMLInputElement // eslint-disable-line
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const FormSmallInputy: React.FC<InputProps> = ({
  label,
  type,
  name,
  register,
  required,
  value,
}) => {
  return (
    <div
      className={[
        styles.smallInput,
        type === 'date' && styles.smallInputDate,
      ].join(' ')}
    >
      <label className={styles.smallInputLabel} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
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
