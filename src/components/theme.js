import { extendTheme } from '@chakra-ui/react';
import background from '../images/background.jpg';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgImage: { background },
        bgSize: 'cover',
        bgRepeat: 'no-repeat',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});
