import { GetServerSideProps, NextPage } from 'next';
import { useForm } from 'react-hook-form';
import FormBigInput from '../../components/Form/FormBigInput';
import FormSmallInput from '../../components/Form/FormSmallInput';
import styles from './Form.module.scss';

enum InputType {
  big = 'big',
  small = 'small',
  date = 'date',
  links = 'links',
}

type InputTypes = keyof typeof InputType;

interface InputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  type: InputTypes;
  rows?: number;
  required?: boolean;
}

interface Props {
  formFields: InputProps[];
}

const Form: NextPage<Props> = ({ formFields }) => {
  const { register, handleSubmit, watch, errors } = useForm<Props>();
  const onSubmit = (data: Props) => console.log(data);

  const inputList = formFields.map((input) => {
    if (input.type === InputType.small || input.type === InputType.date)
      return <FormSmallInput key={input.id} {...input} register={register} />;
    if (input.type === InputType.big)
      return <FormBigInput {...input} key={input.id} register={register} />;
    return null;
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <img
        src="/images/cryptorangerlogo.svg"
        alt="Crypto Ranger logo sign"
        className={styles.formLogo}
      />
      {inputList}
      <input
        type="submit"
        className={styles.formSubmitBtn}
        value="Request Review"
      />
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/form', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: null,
  });
  const data: Props = await res.json();
  return {
    props: data,
  };
};

export default Form;
