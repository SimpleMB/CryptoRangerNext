import styles from './FormBigInput.module.scss';

type RefReturn =
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined;

// eslint-disable-next-line
type InputProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>, // eslint-disable-line
  HTMLTextAreaElement // eslint-disable-line
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const FormBigInput: React.FC<InputProps> = ({
  label,
  name,
  register,
  required,
  defaultValue,
  rows,
}) => {
  return (
    <div className={styles.bigInput}>
      <label className={styles.bigInputLabel} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        className={styles.bigInputField}
        name={name}
        ref={register({ required })}
        defaultValue={defaultValue}
        required={required}
        rows={rows || 5}
      />
    </div>
  );
};

export default FormBigInput;
