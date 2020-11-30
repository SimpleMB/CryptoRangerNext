import { useForm } from 'react-hook-form';
import FormBigInput from '../../components/Form/FormBigInput';
import FormSmallInput from '../../components/Form/FormSmallInput';

enum InputType {
  big = 'big',
  small = 'small',
  date = 'date',
}

interface InputProps {
  name: string;
  label: string;
  value: string;
  type: InputType;
  rows?: number;
  required?: boolean;
}

interface FormProps {
  projectName: string;
  projectWeb: string;
  whenProjectStarts: string;
  coreConcept: string;
}

interface FormProp {
  form: InputProps[];
}

const Form: React.FC<FormProp> = ({ form }) => {
  const { register, handleSubmit, watch, errors } = useForm<FormProp>();
  const onSubmit = (data: FormProp) => console.log(data);

  const inputList = form.map((input, index) => {
    if (input.type === 'small')
      return <FormSmallInput key={index} {...input} register={register} />;
    if (input.type === 'big')
      return <FormBigInput {...input} key={index} register={register} />;
    if (input.type === 'date') return null;
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputList}
      <input type="submit" />
    </form>
  );
};

export async function getServerSideProps() {
  // Fetch initial data for the form props
  return {
    props: {
      form: [
        {
          id: 0,
          name: 'projectName',
          label: "Project's Name",
          value: 'P name',
          type: 'small',
          required: true,
        },
        {
          id: 1,
          name: 'projectWeb',
          label: "Project's website",
          value: 'www.awesomeproject.com',
          type: 'small',
          required: true,
        },
        {
          id: 2,
          name: 'projectStart',
          label: 'When project starts',
          value: '2020-12-01',
          type: 'date',
          required: true,
        },
        {
          id: 3,
          name: 'coreConcept',
          label: 'Core concept of the project',
          value: 'some legit shit...',
          type: 'big',
          rows: 3,
          required: true,
        },
      ],
    },
  };
}

export default Form;
