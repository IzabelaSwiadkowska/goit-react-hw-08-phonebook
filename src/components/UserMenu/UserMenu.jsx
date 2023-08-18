const { Box, Button, Text } = require('@chakra-ui/react');

function UserMenu() {
  return (
    <Box>
      <Text> Welcome, mango@mail.com </Text>

      <Button>Logout</Button>
    </Box>
  );
}

export default UserMenu;
