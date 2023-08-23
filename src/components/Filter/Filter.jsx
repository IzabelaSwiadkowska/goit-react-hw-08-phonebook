import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input, FormControl, FormLabel, Box } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box display="flex" justifyContent="center">
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={{ base: '300px', md: '700px', lg: '768px' }}
        m={4}
      >
        <FormLabel m="10px" fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Find contacts by Name{' '}
        </FormLabel>
        <Input
          fontSize={{ base: '15px', md: '20px', lg: '25px' }}
          focusBorderColor="teal.600"
          type="text"
          name="filter"
          placeholder="Enter filter"
          value={filter}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};
export default Filter;
