import { useForm } from 'react-hook-form';
import FormBigInput from '../../components/Form/FormBigInput';
import FormSmallInput from '../../components/Form/FormSmallInput';
import styles from './Form.module.scss';

enum InputType {
  big = 'big',
  small = 'small',
  date = 'date',
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

  const inputList = formFields.map((input, index) => {
    if (input.type === 'small' || input.type === 'date')
      return <FormSmallInput key={index} {...input} register={register} />;
    if (input.type === 'big')
      return <FormBigInput {...input} key={index} register={register} />;
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {inputList}
      <input type="submit" />
    </form>
  );
};

export async function getServerSideProps() {
  // Fetch initial data for the form props
  return {
    props: {
      formFields: [
        {
          id: 'projectName',
          name: 'projectName',
          label: "Project's Name",
          value: 'P name',
          type: 'small',
          required: true,
        },
        {
          id: 'projectWeb',
          name: 'projectWeb',
          label: "Project's website",
          value: 'www.awesomeproject.com',
          type: 'small',
          required: true,
        },
        {
          id: 'projectStart',
          name: 'projectStart',
          label: 'When project starts',
          value: '2020-12-01',
          type: 'date',
          required: true,
        },
        {
          id: 'coreConcept',
          name: 'coreConcept',
          label: 'Core concept of the project',
          value: 'some legit shit...',
          type: 'big',
          rows: 4,
          required: true,
        },
      ],
    },
  };
}

export default Form;
