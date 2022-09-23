import Form from '../_fragments/Form';
import useSignForm from '../_hooks/useSignForm';

const FormPage = () => {
  const formData = useSignForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ username, nickname, phone, email, gender, age }) => {
      console.log(
        `submitted: ${username}, ${nickname}, ${phone}, ${email}, ${gender?.value}, ${age?.value}`,
      );
    },
  );
  return <Form formData={formData} onSubmit={onSubmit} />;
};

export default FormPage;
