import { Input } from '../../types';
import styles from './FormLangInput.module.scss';
import prices from '../../utils/dummies/prices.json';

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
      <legend className={styles.langInputLabel}>{label}</legend>

      <input
        id={`${fieldId}Polish`}
        className={styles.langInputField}
        type="radio"
        name={fieldName}
        defaultValue="Polish"
        ref={register({ required })}
        // required={required}
        defaultChecked={isPolish}
      />
      <label htmlFor={`${fieldId}Polish`}>
        {`Polish - ${prices.polish.priceCents / 100}$`}
      </label>

      <input
        id={`${fieldId}English`}
        className={styles.langInputField}
        type="radio"
        name={fieldName}
        defaultValue="English"
        ref={register({ required })}
        // required={required}
        defaultChecked={isEnglish}
      />
      <label htmlFor={`${fieldId}English`}>
        {`English - ${prices.english.priceCents / 100}$`}
      </label>

      <input
        id={`${fieldId}Both`}
        className={styles.langInputField}
        type="radio"
        name={fieldName}
        defaultValue="English"
        ref={register({ required })}
        // required={required}
        defaultChecked={isEnglish}
      />
      <label htmlFor={`${fieldId}Polish`}>
        {`English AND Polish (2 separate reviews) - ${
          prices.both.priceCents / 100
        }$`}
      </label>
    </fieldset>
  );
};

export default FormLangInput;
