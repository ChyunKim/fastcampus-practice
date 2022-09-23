import { CONFIG } from '@config';

import { Box, Center, Container } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';

import { SOCIAL } from '@constants/social';

import { LogoIcon } from 'generated/icons/MyIcons';

const SOCIAL_REDIRECT_URL = `${CONFIG.DOMAIN}`;

const SOCIAL_LIST: { social: SocialType; link: string } = {
  social: 'kakao',
  link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
};

const BasicLoginPage = () => {
  return (
    <Container variant="orange">
      <Center flexDir="column" h="100%">
        <LogoIcon m="60% 40px" boxSize="262" color="#FFFFFF" />
        <Box w="310px" m="50px">
          <SocialButton data={SOCIAL_LIST} size="md" />
        </Box>
      </Center>
    </Container>
  );
};

export default BasicLoginPage;
