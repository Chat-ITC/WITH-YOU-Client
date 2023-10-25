//library
import { Link } from 'react-router-dom';

//components
import TextInput from '../../components/TextInput';
import PWInpit from '../../components/PWInput';

//style
import { LoginContainer } from './style';

const Login = () => {
  return (
    <>
      <LoginContainer>
        <TextInput>
        </TextInput>
        <PWInpit>
        </PWInpit>
      </LoginContainer>
    </>
  );
}

export default Login;