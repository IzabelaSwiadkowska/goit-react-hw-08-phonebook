import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from 'components/RootLayout/RootLayout';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import NotFound from '../pages/NotFound';
import { Box } from '@chakra-ui/react';
import background from '../images/background.jpg';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const App = () => {
  return (
    <Box bgImage={background}>
      <RouterProvider router={router} />
    </Box>
  );
};
