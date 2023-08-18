import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`

      body: {
        bgImage: 'url(./images/background.jpg)',
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
