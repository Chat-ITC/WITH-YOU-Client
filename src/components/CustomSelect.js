import React, { useState } from "react";
import styled, { css } from 'styled-components';
import setting from '../assets/setting.svg';

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
            <SelectOptionsCenter $show={showOptions}>
                {major.map((major, index) => (
                    <Option 
                    key={index}
                    value={major}
                    onClick={handleOnChangeSelectValue}>{major}</Option>
                ))}   
            </SelectOptionsCenter>
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

    const grade = [1, 2, 3, 4, 5]

    return (
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label value={currentValue}>{currentValue}</Label>
            <SelectOptionsCenter $show={showOptions}>
                {grade.map((grade, index) => (
                    <Option 
                    key={index}
                    value={grade}
                    onClick={handleOnChangeSelectValue}>{grade}</Option>
                ))}   
            </SelectOptionsCenter>
        </SelectBox>
    )
};


function CameraItemSetting({onDataSetting}) {

  const [showOptions, setShowOptions] = useState(false);
  const handleOnChangeSelectValue = (e) => {
      const { innerText } = e.target;
      onDataSetting(innerText);
  };
  const settingList = ["삭제하기"];

  return (
    <>
    <SettingSelectBox onClick={() => setShowOptions((prev) => !prev)}>
        <SelectOptionsLeft $show={showOptions}>
            {settingList.map((settingList, index) => (
              <Option 
              key={index}
              value={settingList}
              onClick={handleOnChangeSelectValue}>{settingList}</Option>
            ))}
        </SelectOptionsLeft>
    </SettingSelectBox>
    </>
)


};
export {MajorSelect, GradeSelect, CameraItemSetting};

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

const SettingSelectBox = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${setting});
  background-size: contain;
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

const SelectOptionsCenter = styled.ul`
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

const SelectOptionsLeft = styled.ul`
  position: absolute;
  z-index: 3;
  list-style: none;
  top: 33px;
  right: 0px;
  width: 150px;
  overflow: hidden;
  transform:  ${(props) => (props.$show ? "scale(1)" : "scale(0)")};
  transform-origin: top right;
  transition: transform 0.3s ease;
  padding: 0;
  border: 0px;
  border-radius: 8px;
  background-color: #F1F1F1;
  box-shadow: 0px 0px 100px 15px rgba(0, 0, 0, 0.2);
`;

const Option = styled.li`
  color: black;
  font-size: 17px;
  padding: 10px 10px 10px 20px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
  &:nth-child(even) {
    border-top: 0.5px solid #BABABA;
    border-bottom: 0.5px  solid #BABABA;
  }
`;
