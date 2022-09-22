import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export interface FormProps {
  username: string;
  nickname: string;
  phone: string;
  email: string;
  gender?: {
    label: string;
    value: string;
  };
  age?: {
    label: '10대' | '20대' | '30대' | '40대' | '50대이상';
    value: '10' | '20' | '30' | '40' | '50';
  };
}

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '최소 2자 이상 입력해주세요'),
  nickname: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.')
    .max(10, '한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.'),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test(
      'isNumber',
      '정확한 핸드폰 번호를 입려해주세요.',
      (val) => !Number.isNaN(Number(val)),
    ),
  email: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .email('올바르지 않은 이메일 입니다.'),
});

const useSignForm = (options?: UseFormProps<FormProps>) => {
  return useForm<FormProps>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useSignForm;
