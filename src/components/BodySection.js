import { 
    CameraBigButton,
    CameraButtonContainer,
    CameraPhrases,
    CameraInput
} from './style'

import { useNavigate } from "react-router-dom";
import React from "react";

const BodySection = (props) => {
    const navigate = useNavigate();
    //카메라
    const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        console.log("선택한 파일(홈페이지):", file);

        // 파일을 전달하고 다른 페이지로 이동
        navigate("/capture", { state: { selectedFile: file } });
        }
    };
    return (
        <>
            {props.bodyData === "camera" ?
                <CameraButtonContainer>
                    <CameraInput 
                    type="file"
                    accept="image/*;
                    capture=camera"
                    onChange={handleFileChange}/>
                    <CameraBigButton/>
                    <CameraPhrases>
                        사진을 찍어보세요!
                    </CameraPhrases>
                </CameraButtonContainer>
                :
                props.bodyData
            }
        </>
    );
}

export default BodySection;