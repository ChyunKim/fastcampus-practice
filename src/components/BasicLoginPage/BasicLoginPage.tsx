import { CONFIG } from '@config';

import { Center, Container } from '@chakra-ui/react';

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
        <LogoIcon m="50% 40px" boxSize="262" color="white" />
        <SocialButton data={SOCIAL_LIST} size="md" />
      </Center>
    </Container>
  );
};

export default BasicLoginPage;
