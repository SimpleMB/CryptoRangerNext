interface FormField {
  fieldId: string;
  fieldName: string;
  label: string;
  value: string;
  type: string;
  rows?: number;
  required?: boolean;
}
interface Project {
  id: number;
  formFields: FormField[];
  ownerId: number;
}
interface Props {
  project: Project;
}

const Card: React.FC<Props> = ({ project }) => {
  console.log(project);
  return (
    <li>
      {project.formFields[0].value} | Publication: {project.formFields[1].value}
    </li>
  );
};

export default Card;
