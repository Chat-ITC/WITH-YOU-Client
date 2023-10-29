import {
    CameraBigButton,
    CameraButtonContainer,
    CameraPhrases,
    CameraInput
} from './style'

import { useNavigate } from "react-router-dom";
import React from "react";
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor'


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

    //스크랩
    const scrapRequest = async() => {
        try{
            const response = await axiosInstance.patch(`/scrap/${props.id}`);
            console.log(response);
        }
        catch(error) {
            console.log(error);
        }
    }

    //스크랩 리스트 테스트
    const scrapListRequestTest = async() => {
        try{
            const response = await axiosInstance.get('/scrap/list');
            console.log(response);
        }
        catch(error) {
            console.log(error);
        }
    }

    //삭제 테스트
    const deleteListRequestTest = async() => {
        try {
            const response = await axiosInstance.delete('/question/delete', {params:{id:props.id}});
            console.log(response);
        } 
        catch(error) {
            console.log(error);
        }
    }
    return (
        <>
            {props.bodyData === "camera" ?
                <CameraButtonContainer>
                    <CameraInput
                        type="file"
                        accept="image/*; capture=camera"
                        onChange={handleFileChange} />
                    <CameraBigButton />
                    <CameraPhrases>
                        사진을 찍어보세요!
                    </CameraPhrases>
                </CameraButtonContainer>
                :          
                <div>
                    <p>{props.bodyData}</p>
                    <button onClick={scrapRequest}>
                        스크랩? 
                    </button>
                    <button onClick={scrapListRequestTest}>
                        스크랩 목록
                    </button>
                    <button onClick={deleteListRequestTest}>
                        삭제
                    </button>
                </div>
            }
        </>
    );
}

export default CameraBodySection;