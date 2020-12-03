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

interface InputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  type: InputType;
  rows?: number;
  required?: boolean;
}

interface FormProps {
  formFields: InputProps[];
}

const Form: React.FC<FormProps> = ({ formFields }) => {
  const { register, handleSubmit, watch, errors } = useForm<FormProps>();
  const onSubmit = (data: FormProps) => console.log(data);

  const inputList = formFields.map((input) => {
    if (input.type === 'small' || input.type === 'date')
      return <FormSmallInput key={input.id} {...input} register={register} />;
    if (input.type === 'big')
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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/form', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: null,
  });
  const data: FormProps = await res.json();
  return {
    props: data,
  };
}

export default Form;
