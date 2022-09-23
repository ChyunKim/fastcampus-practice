import { Box, Container, Heading } from '@chakra-ui/react';

import FormPage from './_fragments/FormPage';

import { LogoIcon } from 'generated/icons/MyIcons';

const SignupPage = () => {
  return (
    <Container variant="white">
      <Box m="32px 0">
        <LogoIcon w="120" color="App.primary.500" />
      </Box>
      <Heading variant="extraTitle">회원가입</Heading>
      <FormPage />
    </Container>
  );
};

export default SignupPage;
