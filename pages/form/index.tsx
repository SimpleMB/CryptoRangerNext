import { useForm } from 'react-hook-form';
import FormSmallInput from '../../components/Form/FormSmallInput';

interface InputProps {
  projectName: string;
  projectWeb: string;
  whenProjectStarts: string;
  coreConcept: string;
}

const Form: React.FC<InputProps> = (props) => {
  const { register, handleSubmit, watch, errors } = useForm<InputProps>();
  const onSubmit = (data: InputProps) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSmallInput
        type="text"
        label="Project's name"
        name="projectName"
        register={register}
        defaultValue={props.projectName}
        required
      />
      <input
        type="text"
        name="projectWeb"
        ref={register}
        defaultValue={props.projectWeb}
      />
      <input
        type="date"
        name="whenProjectStarts"
        ref={register}
        defaultValue={props.whenProjectStarts}
      />
      <input
        type="text"
        name="coreConcept"
        ref={register}
        defaultValue={props.coreConcept}
      />
      <input type="submit" />
    </form>
  );
};

export async function getServerSideProps() {
  // Fetch initial data for the form props
  return {
    props: {
      projectName: 'P name',
      projectWeb: 'www',
      whenProjectStarts: '10-10-10',
      coreConcept: 'some shit...',
    },
  };
}

export default Form;
