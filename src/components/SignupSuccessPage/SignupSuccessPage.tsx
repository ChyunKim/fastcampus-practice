import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';

import { HandsClappingIcon } from 'generated/icons/MyIcons';

const SignupSuccessPage = () => {
  return (
    <Container variant="white">
      <Heading variant="extraTitle" mt="80px">
        회원가입이
        <br />
        완료되었습니다.
      </Heading>
      <Text fontSize="12px" color="App.gray.600">
        관심사별로 자유롭게 소통해보세요!
      </Text>
      <VStack>
        <HandsClappingIcon
          boxSize={216}
          mt="100px"
          mb="200px"
        ></HandsClappingIcon>
        <Button variant="orange" m="30px 0">
          완료
        </Button>
      </VStack>
    </Container>
  );
};
export default SignupSuccessPage;
