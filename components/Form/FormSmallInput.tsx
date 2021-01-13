import { Input } from '../../types';
import styles from './FormSmallInput.module.scss';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

/* eslint-disable @typescript-eslint/indent */
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, // eslint-disable-line
  HTMLInputElement // eslint-disable-line
> &
  Input & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
  };
/* eslint-enable @typescript-eslint/indent */

const FormSmallInput: React.FC<InputProps> = ({
  fieldId,
  fieldName,
  label,
  value,
  type,
  register,
  required,
}) => {
  return (
    <div
      className={[
        styles.smallInput,
        type === 'date' && styles.smallInputDate,
      ].join(' ')}
    >
      <label className={styles.smallInputLabel} htmlFor={fieldName}>
        {label}
      </label>
      <input
        id={fieldId}
        className={styles.smallInputField}
        type={type}
        name={fieldName}
        ref={register({ required })}
        defaultValue={value}
        required={required}
      />
    </div>
  );
};

export default FormSmallInput;
