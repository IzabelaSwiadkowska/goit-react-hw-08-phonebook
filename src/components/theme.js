import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`

      body: {
        bgImage:
          'url(http://localhost:3000/goit-react-hw-08-phonebook/static/media/background.0018ba6b86c1f370cabf.jpg)',
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
