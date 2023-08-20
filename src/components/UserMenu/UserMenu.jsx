import { Box, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks/useAuth';
import { logOut } from 'redux/auth/actions';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <Text> Welcome, {user.name}</Text>

      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
