import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from 'components/RootLayout/RootLayout';
import NotFound from '../pages/NotFound';
import { Box } from '@chakra-ui/react';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const App = () => {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};
