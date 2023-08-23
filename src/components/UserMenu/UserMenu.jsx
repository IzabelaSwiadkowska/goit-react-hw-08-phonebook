import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import useAuth from 'components/hooks/useAuth';
import { Button, Text, Box } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize={{ base: '15px', md: '20px' }}
        as="b"
        mr="4"
      >
        Welcome,{' '}
        <Text color="purple.500" ml={{ base: '10px', sm: '15px' }}>
          {' '}
          {user.name}
        </Text>
      </Box>

      <Button
        type="button"
        variant="ghost"
        color="grey"
        mx={{ base: '5px', md: '40px' }}
        borderRadius="2rem"
        _hover={{
          bgColor: 'teal.500',
          color: 'white',
          transform: 'scale(1.1)',
          border: '1px solid white',
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
export default UserMenu;
