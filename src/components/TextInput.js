//styles
import { InputIdContainer } from './style';

const TextInput = ({value, onChange, placeholder}) => {

  return(
    <>
      <InputIdContainer 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    </>
  );
}

export default TextInput;