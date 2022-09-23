import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Heading,
  Input,
  Select,
} from '@chakra-ui/react';

import { FormProps } from '../_hooks/useSignForm';
import AgreeSignup from './AgreeSignup';
import FormCustom from './FormCustom';

import { ProfileIcon } from 'generated/icons/MyIcons';

interface FormData extends BoxProps {
  formData: UseFormReturn<FormProps>;
}
const Form = ({
  formData: {
    register,
    formState: { errors },
  },
  onSubmit,
  ...basicProps
}: FormData) => {
  return (
    <Box as="form" p="50px 0" onSubmit={onSubmit} {...basicProps}>
      <Box>
        <Heading variant="title">회원정보입력</Heading>
        <ProfileIcon w="343px" h="70px" m="40px 0" />
        <FormCustom label="이름" errorText={errors.username?.message}>
          <Input variant="formstyled" {...register('username')} />
        </FormCustom>
        <FormCustom label="닉네임" errorText={errors.nickname?.message}>
          <Input variant="formstyled" {...register('nickname')} />
        </FormCustom>
        <FormCustom label="핸드폰 번호" errorText={errors.phone?.message}>
          <Input variant="formstyled" {...register('phone')} />
        </FormCustom>
        <FormCustom label="이메일 주소" errorText={errors.email?.message}>
          <Input variant="formstyled" {...register('email')} />
        </FormCustom>
      </Box>
      <Box p="30px 0">
        <Heading variant="title">추가정보입력(선택)</Heading>

        <FormCustom mt="40px" label="성별">
          <Select
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
