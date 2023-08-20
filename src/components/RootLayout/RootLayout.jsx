import { Box, Heading, HStack, Spacer } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import background from '../../images/background.jpg';
import { Navigation } from '../Navigation/Navigation';

export default function RootLayout() {
  return (
    <Box bgImage={background} h="100vh" bgSize="cover" bgRepeat="no-repeat">
      <Heading>
        <Navigation />

        <Spacer />
        <HStack spacing="20px"></HStack>
        <AuthNav />
      </Heading>
      <Outlet />
    </Box>
  );
}
