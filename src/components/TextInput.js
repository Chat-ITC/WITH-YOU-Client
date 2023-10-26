//styles
import { InputIdContainer, InputId } from './style';

const TextInput = ({value, onChange, placeholder}) => {

  return(
    <>
      <InputIdContainer>
        <InputId
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        </InputIdContainer>
    </>
  );
}

export default TextInput;