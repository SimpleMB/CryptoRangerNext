import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import Forbiden from '../../components/Forbiden/Forbiden';
import FormBigInput from '../../components/Form/FormBigInput';
import FormSmallInput from '../../components/Form/FormSmallInput';
import { formModel } from '../../models';
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
  const [session, loading] = useSession();
  const { register, handleSubmit, watch, errors } = useForm<Props>();
  const onSubmit = (data: Props) => console.log(data);

  const inputList = formFields.map((input) => {
    if (input.type === InputType.small || input.type === InputType.date)
      return <FormSmallInput key={input.id} {...input} register={register} />;
    if (input.type === InputType.big)
      return <FormBigInput {...input} key={input.id} register={register} />;
    return null;
  });

  console.log(formFields[0]);
  if ((!session && !loading) || formFields[0] === undefined)
    return <Forbiden />;
  if (loading) return null; // loader
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const dummyProps = { formFields: [] };
  try {
    const data = await formModel.findFirst({
      where: {
        id: Number(context.query.id),
        ownerId: session.id,
      },
      select: {
        id: true,
        formFields: true,
        ownerId: true,
      },
    });
    return {
      props: data || dummyProps,
    };
  } catch (error) {
    console.log(error);
    return {
      props: dummyProps,
    };
  }
};

export default Form;

// TODO: loading of session - loader maby?
