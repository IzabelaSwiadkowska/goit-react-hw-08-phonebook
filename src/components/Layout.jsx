import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import background from '../images/background.jpg';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box
      pt="20px"
      bgImage={background}
      h="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
export default Layout;
