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
  const isBoth = value.includes('both');
  const isFree = value.includes('free');

  return (
    <fieldset className={styles.langInput}>
      <legend className={styles.langInputLegend}>{label}</legend>

      <div className={styles.radioWrapper}>
        <label className={styles.langInputLabel} htmlFor={`${fieldId}English`}>
          <input
            id={`${fieldId}English`}
            className={styles.langInputField}
            type="radio"
            name={fieldName}
            defaultValue="english"
            ref={register({ required })}
            defaultChecked={isEnglish}
          />
          {`English - ${prices.english.priceCents / 100}$`}
        </label>
        <label className={styles.langInputLabel} htmlFor={`${fieldId}Polish`}>
          <input
            id={`${fieldId}Polish`}
            className={styles.langInputField}
            type="radio"
            name={fieldName}
            defaultValue="polish"
            ref={register({ required })}
            defaultChecked={isPolish}
          />
          {`Polish - ${prices.polish.priceCents / 100}$`}
        </label>

        <label className={styles.langInputLabel} htmlFor={`${fieldId}Both`}>
          <input
            id={`${fieldId}Both`}
            className={styles.langInputField}
            type="radio"
            name={fieldName}
            defaultValue="both"
            ref={register({ required })}
            defaultChecked={isBoth}
          />
          {`English AND Polish (2 separate reviews) - ${
            prices.both.priceCents / 100
          }$`}
        </label>

        <label
          className={styles.langInputLabel}
          htmlFor={`${fieldId}PolishFree`}
        >
          <input
            id={`${fieldId}PolishFree`}
            className={styles.langInputField}
            type="radio"
            name={fieldName}
            defaultValue="free"
            ref={register({ required })}
            defaultChecked={isFree}
          />
          {`Polish - Free Review - ${prices.free.priceCents / 100}$`}
        </label>
      </div>
    </fieldset>
  );
};

export default FormLangInput;

// TODO: is [required] in ref still a thing or can be removed?
