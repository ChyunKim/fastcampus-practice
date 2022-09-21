import { FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';

import { ProfileIcon } from 'generated/icons/MyIcons';

const Form = () => {
  return (
    <FormControl m="50px 0">
      <Heading variant="title">회원정보입력</Heading>
      <ProfileIcon w="343px" h="70px" m="40px 0" />
      <FormLabel>
        <Heading variant="titlesmall" color="App.primary.500">
          이름
        </Heading>
      </FormLabel>
      <Input variant="formstyled" type="text" />
      <FormLabel>
        <Heading variant="titlesmall" color="App.primary.500">
          닉네임
        </Heading>
      </FormLabel>
      <Input variant="formstyled" type="text" />
      <FormLabel>
        <Heading variant="titlesmall" color="App.primary.500">
          핸드폰 번호
        </Heading>
      </FormLabel>
      <Input variant="formstyled" type="tel" />
      <FormLabel>
        <Heading variant="titlesmall" color="App.primary.500">
          이메일 주소
        </Heading>
      </FormLabel>
      <Input variant="formstyled" type="email" />
    </FormControl>
  );
};
export default Form;
