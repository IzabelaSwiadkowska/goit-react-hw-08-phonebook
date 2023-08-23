import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: `'Muli', sans-serif`,
  },
  styles: {
    global: {
      body: {
        color: ' #c4c4c4',
      },
    },
  },
});

export default theme;
