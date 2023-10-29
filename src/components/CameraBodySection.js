import {
    CameraBigButton,
    CameraButtonContainer,
    CameraPhrases,
    CameraInput,
    CameraBodyContainer,
    HistoryScrapBtn,
    BodyDataContainer
} from './style'

import { scrapId } from '../store';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor'



const CameraBodySection = () => {
    const selectorBodyData = useSelector((state) => state.CameraItemId.bodyData);
    const onlyScrapState = useSelector((state) => state.CameraItemId.scrap);
    // const [scrapStateToggle, setScrapStateToggle] = useState(selectorBodyData.isScrap);

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


    const dispatch = useDispatch();
    const scrapBtnHandler = async () => {
        try {
            const response = await axiosInstance.patch(`/scrap/${selectorBodyData.id}`);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
        if (onlyScrapState === 'YES') {
            dispatch(scrapId('NO'));
        }
        else {
            dispatch(scrapId('YES'));
        }
    }

    return (
        <>
            {selectorBodyData.content === "camera" ?
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
                <CameraBodyContainer>

                    <HistoryScrapBtn
                        onClick={scrapBtnHandler}
                        $scrapState={onlyScrapState} />

                    <BodyDataContainer>{selectorBodyData.content}</BodyDataContainer>

                </CameraBodyContainer>
            }
        </>
    );
}

export default CameraBodySection;