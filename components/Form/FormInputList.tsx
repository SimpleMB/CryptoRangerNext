import { Input, InputType } from '../../types';
import FormBigInput from './FormBigInput';
import FormLangInput from './FormLangInput';
import FormSmallInput from './FormSmallInput';

type RefInputReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type RefTextAreaReturn =
  | string
  | ((instance: HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLTextAreaElement>
  | null
  | undefined;

interface Props {
  formFields: Input[];
  register: ({
    required,
  }: {
    required?: boolean;
  }) => RefInputReturn & RefTextAreaReturn;
}

const FormInputList: React.FC<Props> = ({ formFields, register }) => {
  const inputList = formFields.map((input) => {
    if (
      input.type === InputType.small ||
      input.type === InputType.date ||
      input.type === InputType.payment
    )
      return (
        <FormSmallInput
          {...input}
          id={input.fieldId}
          key={input.fieldId}
          register={register}
        />
      );
    if (input.type === InputType.big)
      return (
        <FormBigInput
          {...input}
          id={input.fieldId}
          key={input.fieldId}
          register={register}
        />
      );
    if (input.type === InputType.language)
      return (
        <FormLangInput
          {...input}
          id={input.fieldId}
          key={input.fieldId}
          register={register}
        />
      );
    return null;
  });

  return <>{inputList}</>;
};

export default FormInputList;
