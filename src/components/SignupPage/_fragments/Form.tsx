import { SubmitHandler, useForm } from 'react-hook-form';

import { Box, Button, Heading, Input } from '@chakra-ui/react';

import FormCustom from './FormCustom';

import { ProfileIcon } from 'generated/icons/MyIcons';

interface FormProps {
  username: string;
  nikename: string;
  phone: string;
  email: string;
  gender?: '여자' | '남자';
  age?: '10대' | '20대' | '30대' | '40대' | '50대 이상';
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <Box as="form" m="50px 0" onSubmit={handleSubmit(onSubmit)}>
      <Heading variant="title">회원정보입력</Heading>
      <ProfileIcon w="343px" h="70px" m="40px 0" />
      <FormCustom label="이름" errorText={errors.username?.message}>
        <Input
          variant="formstyled"
          {...register('username', {
            required: '최소 2자 이상 입력해주세요.',
            minLength: 2,
          })}
        />
      </FormCustom>
      <FormCustom label="닉네임" errorText={errors.nikename?.message}>
        <Input
          variant="formstyled"
          {...register('nikename', {
            required: '한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.',
          })}
        />
      </FormCustom>
      <FormCustom label="핸드폰 번호" errorText={errors.phone?.message}>
        <Input
          variant="formstyled"
          {...register('phone', {
            required: '정확한 핸드폰 번호를 입력해주세요.',
          })}
        />
      </FormCustom>
      <FormCustom label="이메일 주소" errorText={errors.email?.message}>
        <Input
          variant="formstyled"
          {...register('email', {
            required: '이메일 주소를 정확하게 입력해주세요.',
          })}
        />
      </FormCustom>
      <Button variant="orange" type="submit">
        회원가입 완료
      </Button>
    </Box>
  );
};
export default Form;
