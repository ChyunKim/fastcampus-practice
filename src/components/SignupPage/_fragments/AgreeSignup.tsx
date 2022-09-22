import { useState } from 'react';

import { Box, HStack, Heading, Text } from '@chakra-ui/react';

import { CheckIcon, CirclecheckIcon } from 'generated/icons/MyIcons';

const AgreeSignup = () => {
  const [iconColor, setIconColor] = useState('App.gray.400');

  return (
    <Box mb="80px">
      <Heading variant="title">이용약간동의</Heading>
      <Box mt="40px">
        <HStack
          mb="20px"
          justifyContent="space-between"
          borderBottom="2px solid"
          borderColor="App.primary.500"
          p="4px 0"
        >
          <Heading variant="title" color="App.primary.500">
            아래 약관에 모두 동의합니다.
          </Heading>
          <CirclecheckIcon
            boxSize={6}
            color={iconColor}
            onClick={() =>
              setIconColor(
                iconColor === 'App.gray.400'
                  ? 'App.primary.500'
                  : 'App.gray.400',
              )
            }
          />
        </HStack>
        <HStack justifyContent="space-between" p="16px 0">
          <Text as="u" fontSize="12px" color="App.gray.400">
            서비스 이용을 위한 필수약관 동의
          </Text>
          <CheckIcon boxSize={6} color={iconColor} />
        </HStack>
        <HStack justifyContent="space-between" p="16px 0">
          <Text as="u" fontSize="12px" color="App.gray.400">
            개인정보수집 및 이용, 제3자 제공 동의
          </Text>
          <CheckIcon boxSize={6} color={iconColor} />
        </HStack>
        <HStack justifyContent="space-between" p="16px 0">
          <Text as="u" fontSize="12px" color="App.gray.400">
            마케팅 정보 수신 및 맞춤형 광고 동의(선택)
          </Text>
          <CheckIcon boxSize={6} color={iconColor} />
        </HStack>
      </Box>
    </Box>
  );
};
export default AgreeSignup;
