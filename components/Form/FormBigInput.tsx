import { Input } from '../../types';
import styles from './FormBigInput.module.scss';

type RefReturn =
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined;

/* eslint-disable @typescript-eslint/indent */
type InputProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>, // eslint-disable-line
  HTMLTextAreaElement // eslint-disable-line
> &
  Input & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
  };
/* eslint-enable @typescript-eslint/indent */

const FormBigInput: React.FC<InputProps> = ({
  fieldId,
  fieldName,
  label,
  value,
  register,
  required,
  rows,
}) => {
  return (
    <div className={styles.bigInput}>
      <label className={styles.bigInputLabel} htmlFor={fieldName}>
        {label}
      </label>
      <textarea
        id={fieldId}
        className={styles.bigInputField}
        name={fieldName}
        ref={register({ required })}
        defaultValue={value}
        required={required}
        rows={rows || 5}
      />
    </div>
  );
};

export default FormBigInput;
