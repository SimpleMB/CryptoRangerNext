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
      <input
        type="submit"
        className={styles.formSubmitBtn}
        value="Request Review"
      />
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
          label: "Project's name:",
          value: '',
          type: 'small',
          required: true,
        },
        {
          id: 'projectWeb',
          name: 'projectWeb',
          label: "Project's website:",
          value: '',
          type: 'small',
          required: true,
        },
        {
          id: 'projectStart',
          name: 'projectStart',
          label: 'When project starts:',
          value: '',
          type: 'date',
          required: true,
        },
        {
          id: 'coreConcept',
          name: 'coreConcept',
          label: 'Core concept of the project:',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'simpleAbout',
          name: 'simpleAbout',
          label: 'What is your project about? Explain it as simply as you can:',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'useExample',
          name: 'useExample',
          label: 'Provide simple example of use:',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'products',
          name: 'products',
          label: 'Main products:',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'coreConcept',
          name: 'coreConcept',
          label: 'Core concept of the project:',
          value: 'some legit shit...',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'benefits',
          name: 'benefits',
          label: 'What are the benefits of using your products:',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'projectIdea',
          name: 'projectIdea',
          label: 'How did you came up with idea to start such project?',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'importandToKnow',
          name: 'importandToKnow',
          label:
            'What are the most importand things in your project that your future customer NEED to know?',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'closestCompetitor',
          name: 'closestCompetitor',
          label: 'Who is your closest competitor?',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'diffCompetitor',
          name: 'diffCompetitor',
          label:
            "What's the difference between your project and closest competitor?",
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'advantageCompetitor',
          name: 'advantageCompetitor',
          label: 'Advantages over competition:',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'futurePromotions',
          name: 'futurePromotions',
          label: 'Future promotions / sales / air drops?',
          value: '',
          type: 'big',
          rows: 4,
          required: false,
        },
        {
          id: 'manyPeople',
          name: 'manyPeople',
          label: 'How many people work on this project?',
          value: '',
          type: 'small',
          required: false,
        },
        {
          id: 'aboutOwner',
          name: 'aboutOwner',
          label: 'About owner of the project?',
          value: '',
          type: 'big',
          rows: 5,
          required: false,
        },
        {
          id: 'linksDesc',
          name: 'linksDesc',
          label: 'Importand links to place in the video description:',
          value: '',
          type: 'links',
          required: false,
        },
        {
          id: 'whenPublished',
          name: 'whenPublished',
          label: 'When review must be published?',
          value: '2020-12-07',
          type: 'date',
          required: true,
        },
      ],
    },
  };
}

export default Form;
