import { SubmitHandler, useForm } from 'react-hook-form';

import { Box, Button, Heading, Input, Select } from '@chakra-ui/react';

import AgreeSignup from './AgreeSignup';
import FormCustom from './FormCustom';

import { ProfileIcon } from 'generated/icons/MyIcons';

interface FormProps {
  username: string;
  nikename: string;
  phone: string;
  email: string;
  gender?: {
    label: '여자' | '남자';
    value: 'woman' | 'man';
  };
  age?: {
    label: '10대' | '20대' | '30대' | '40대' | '50대이상';
    value: '10' | '20' | '30' | '40' | '50';
  };
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
    <Box as="form" p="50px 0" onSubmit={handleSubmit(onSubmit)}>
      <Box>
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
      </Box>
      <Box p="30px 0">
        <Heading variant="title">추가정보입력(선택)</Heading>
        <FormCustom mt="40px" label="성별">
          <Select
            {...register('gender')}
            variant="flushed"
            placeholder="성별을 선택하세요."
            borderBottom="2px solid"
            borderColor="App.gray.400"
            color="App.gray.400"
          >
            <option value="woman">여자</option>
            <option value="man">남자</option>
          </Select>
        </FormCustom>
        <FormCustom mt="50px" label="연령대">
          <Select
            {...register('age')}
            variant="flushed"
            placeholder="연령대를 선택하세요."
            borderBottom="2px solid"
            borderColor="App.gray.400"
            color="App.gray.400"
          >
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대이상</option>
          </Select>
        </FormCustom>
      </Box>
      <AgreeSignup />
      <Button variant="orange" type="submit">
        회원가입 완료
      </Button>
    </Box>
  );
};
export default Form;
