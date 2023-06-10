import { useForm } from 'react-hook-form';
import { Button, Input, StyledForm } from './Form.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const Form = ({ updateParams }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    updateParams(data);
    reset({ query: '' });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('query', { required: true })} />
      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </StyledForm>
  );
};

export default Form;
