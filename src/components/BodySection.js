import { 
    CameraBigButton,
    CameraButtonContainer,
    CameraPhrases
 } from './style'

const BodySection = (props) => {

    return (
        <>
            {props.bodyData === "camera" ?
                <CameraButtonContainer>
                    <CameraBigButton>
                    </CameraBigButton>
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