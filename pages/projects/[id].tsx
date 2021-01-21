import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/client';
import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import Forbiden from '../../components/Forbiden/Forbiden';
import FormBigInput from '../../components/Form/FormBigInput';
import FormSmallInput from '../../components/Form/FormSmallInput';
import { formModel } from '../../models';
import styles from './Form.module.scss';
import { FormValues, InputType, Project } from '../../types';
import FormLangInput from '../../components/Form/FormLangInput';

const Form: NextPage<Project> = (props) => {
  const { id, formFields, ownerId } = props;

  const router = useRouter();
  const [session, loading] = useSession();
  const isOwnerCorrect = session ? ownerId === session.id : false;

  const timeId = useRef(0);
  const { register, handleSubmit, watch, formState } = useForm<FormValues>();

  const watched = watch();

  useEffect(() => {
    console.log('is submitting', formState.isSubmitting);
    console.log('is submited', formState.isSubmitted);
    console.log('sub times', formState.submitCount);
    console.log('is dirty', formState.isDirty);
    if (
      Object.keys(watched).length !== 0 &&
      !formState.isSubmitted &&
      !formState.isSubmitting &&
      formState.submitCount === 0 &&
      formState.isDirty
    )
      autoSave(watched);
  }, [watched, formState]);

  const autoSave = (data: FormValues) => {
    clearTimeout(timeId.current);
    const index = setTimeout(() => saveProject(watched, false), 3000);
    timeId.current = Number(index);
  };

  const sendProject = async (project: Project) => {
    if (formState.submitCount > 0) return;
    try {
      const response = await fetch('http://localhost:3000/api/projects', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });
      if (response.ok) router.push('/projects');
      // show that save was successful
    } catch (err) {
      console.log(err);
    }
  };

  const saveProject = (data: FormValues, isRequested: boolean) => {
    console.log('is saved');
    const modifiedFormFields = formFields.map((field) => {
      const value = data[field.fieldId];
      return {
        ...field,
        value,
      };
    });

    const updatedProject: Project = {
      ...props,
      formFields: modifiedFormFields,
      requested: isRequested,
    };

    sendProject(updatedProject);
  };

  const onSubmit = async (data: FormValues) => {
    console.log('clearing timeout', timeId.current);
    clearTimeout(timeId.current);
    saveProject(data, true);

    // maby receive something form sevePRoject and then router.push
  };

  const deleteProject = async () => {
    console.log('Deleteing project');
    const response = await fetch('http://localhost:3000/api/projects', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    console.log('Delete response: ', response);
    if (response.ok) router.push('/projects');
  };

  const inputList = formFields.map((input) => {
    if (input.type === InputType.small || input.type === InputType.date)
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

  if (session && !loading && !isOwnerCorrect) return <Forbiden />;
  if (!session && !loading) return <Forbiden />;
  if (loading) return null; // loader
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <img
        src="/images/cryptorangerlogo.svg"
        alt="Crypto Ranger logo"
        className={styles.formLogo}
      />
      {inputList}
      <div className={styles.formControls}>
        {/* TODO: create project controls with delete and request buttons */}
        <button
          type="button"
          className={styles.formDeleteBtn}
          onClick={deleteProject}
        >
          Delete project
        </button>
        <input
          type="submit"
          className={styles.formSubmitBtn}
          value="Request Review"
        />
      </div>
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
        requested: true,
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
