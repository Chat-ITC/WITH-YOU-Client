import React, { useState } from "react";
import styled, { css } from 'styled-components';

function MajorSelect ({onDataMajor}) {
    const [currentValue, setCurrentValue] = useState("학과를 선택해주세요");
    const [showOptions, setShowOptions] = useState(false);
    const handleOnChangeSelectValue = (e) => {
        const { innerText } = e.target;
        onDataMajor(innerText);
        setCurrentValue(innerText);
    };

    const major = ["보건행정경영학과", "의료생명공학과", "의료IT공학과", "임상병리학과", "작업치료학과", "의약공학과"]

    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label value={currentValue}>{currentValue}</Label>
            <SelectOptions $show={showOptions}>
                {major.map((major, index) => (
                    <Option 
                    key={index}
                    value={major}
                    onClick={handleOnChangeSelectValue}>{major}</Option>
                ))}   
            </SelectOptions>
        </SelectBox>
    )
};

function GradeSelect ({onDataGrade}) {
    const [currentValue, setCurrentValue] = useState("학년을 선택해주세요");
    const [showOptions, setShowOptions] = useState(false);
    const handleOnChangeSelectValue = (e) => {
        const { innerText } = e.target;
        onDataGrade(innerText);
        setCurrentValue(innerText+"학년");
    };

    const major = [1, 2, 3, 4, 5]

    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label value={currentValue}>{currentValue}</Label>
            <SelectOptions $show={showOptions}>
                {major.map((major, index) => (
                    <Option 
                    key={index}
                    value={major}
                    onClick={handleOnChangeSelectValue}>{major}</Option>
                ))}   
            </SelectOptions>
        </SelectBox>
    )
};
export {MajorSelect, GradeSelect};

const SelectBox = styled.div`
  position: relative;
  width: 244px;
  height: 27px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid #bababa;
  border-radius: 5px;
  font-size: 20px;
  
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 5px;
    right: 14px;
    color: #49c181;
    font-size: 20px;
  }

`;

const Label = styled.label`
  color: black;
  font-size: 16px;
  margin-left: 0px;
  text-align: center;
  ${props =>
        (props.value === "학과를 선택해주세요" || props.value === "학년을 선택해주세요") &&
        css`
        color: grey;
  `}
`;

const SelectOptions = styled.ul`
  position: absolute;
  z-index: 3;
  list-style: none;
  top: 24px;
  left: -4px;
  width: 270px;
  overflow: hidden;
  max-height: ${(props) => (props.$show ? "300px" : "0")};
  padding: 0;
  border: 0px;
  border-radius: 8px;
  background-color: #E6E6E6;
  color: #fefefe;
  transition: max-height 0.3s ease;
`;

const Option = styled.li`
  color: black;
  font-size: 16px;
  padding: 10px 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;