import {
  BtnLink,
  Paragraph,
} from 'components/PageNotFound/PageNotFound.styled';

const NotFound = () => {
  return (
    <>
      <Paragraph>
        404
        <br />
        Page Not Found
      </Paragraph>

      <BtnLink to="/"> Go to Home Page</BtnLink>
    </>
  );
};

export default NotFound;
