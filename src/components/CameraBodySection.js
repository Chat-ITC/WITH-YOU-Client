import { 
    CameraBigButton,
    CameraButtonContainer,
    CameraPhrases,
    CameraInput
} from './style'

import { useNavigate } from "react-router-dom";
import React from "react";

const CameraBodySection = (props) => {
    const navigate = useNavigate();
    //카메라
    const handleFileChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    
    if (fileURL) {
        console.log("선택한 파일(홈페이지):", fileURL);
        // 파일을 전달하고 다른 페이지로 이동
        navigate("/capture", { state: fileURL });
        }
    };
    return (
        <>
            {props.bodyData === "camera" ?
                <CameraButtonContainer>
                    <CameraInput 
                    type="file"
                    accept="image/*; capture=camera"
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

export default CameraBodySection;