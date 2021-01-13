import { Input } from '../../types';
import styles from './FormLangInput.module.scss';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

/* eslint-disable @typescript-eslint/indent */
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Input & {
    register: ({ required }: { required?: boolean }) => RefReturn;
  };
/* eslint-enable @typescript-eslint/indent */

const FormLangInput: React.FC<InputProps> = ({
  fieldId,
  fieldName,
  label,
  value,
  register,
  required,
}) => {
  const isPolish = value.includes('polish');
  const isEnglish = value.includes('english');
  return (
    <fieldset className={styles.langInput}>
      <label className={styles.langInputLabel} htmlFor={`${fieldName}English`}>
        {label}
      </label>
      <input
        id={`${fieldId}English`}
        className={styles.langInputField}
        type="checkbox"
        name={`${fieldName}English`}
        ref={register({ required })}
        defaultValue="english"
        // required={required}
        defaultChecked={isEnglish}
      />
      <input
        id={`${fieldId}Polish`}
        className={styles.langInputField}
        type="checkbox"
        name={`${fieldName}Polish`}
        ref={register({ required })}
        defaultValue="polish"
        // required={required}
        defaultChecked={isPolish}
      />
    </fieldset>
  );
};

export default FormLangInput;
