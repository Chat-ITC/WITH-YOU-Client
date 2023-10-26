//styles
import { InputPW, Eye, InputPWContainer, EyeState } from './style';
//library
import React, { useState } from 'react';

const PWInput = ({ placeholder, value, onChange }) => {
  // 비밀번호 가시성 토글
  const [isPasswdVisible, setIsPasswdVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswdVisible(!isPasswdVisible);
    console.log(isPasswdVisible);
  };
  return (
    <>
      <InputPWContainer>
        <InputPW
          type={isPasswdVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        <Eye onClick={togglePasswordVisibility}>
          <EyeState
            $done={isPasswdVisible}
          />
        </Eye>
      </InputPWContainer>
    </>
  );
}

export default PWInput;