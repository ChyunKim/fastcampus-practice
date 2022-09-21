import { ComponentSingleStyleConfig } from '@chakra-ui/theme';

export const Container: ComponentSingleStyleConfig = {
  baseStyle: {
    maxW: ['100%', '780px', '980px', '1280px', '1480px', '1780px'],
  },
  defaultProps: {},
  sizes: {},
  variants: {
    white: {
      maxW: '375px',
      bg: 'white',
    },
    orange: {
      maxW: '375px',
      bg: 'primary.500',
      maxH: '812px',
      h: '100vh',
    },
  },
};
