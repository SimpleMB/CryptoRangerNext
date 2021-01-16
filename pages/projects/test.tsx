import FormLangInput from '../../components/Form/FormLangInput';

const dummy = {
  fieldId: 'projectLang',
  fieldName: 'projectLang',
  label: 'Choose language:',
  value: 'polish',
  type: 'language',
  required: true,
};

const test = () => {
  const { fieldId, fieldName, label, required, value } = dummy;
  return (
    <div>
      <FormLangInput
        fieldId={fieldId}
        fieldName={fieldName}
        label={label}
        value={value}
        register={() => 'yo'}
        required={required}
        type="language"
      />
    </div>
  );
};

export default test;
