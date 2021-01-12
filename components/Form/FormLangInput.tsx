import styles from './FormLangInput.module.scss';

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

const FormLangInput: React.FC<InputProps> = ({
  label,
  type,
  name,
  register,
  required,
  value,
}) => {
  return (
    <fieldset className={styles.langInput}>
      <label className={styles.langInputLabel} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={styles.langInputField}
        type="checkbox"
        name={`${name}Polish`}
        ref={register({ required })}
        defaultValue={value}
        required={required}
      />
      <input
        id={name}
        className={styles.langInputField}
        type="checkbox"
        name={`${name}English`}
        ref={register({ required })}
        defaultValue={value}
        required={required}
      />
    </fieldset>
  );
};

export default FormLangInput;
