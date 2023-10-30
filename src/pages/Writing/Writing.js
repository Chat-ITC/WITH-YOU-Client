import {
  WritingContainer,
  WritingHeaderTop,
  WritingBtn,
  TopEmptyBox,
  TitleInput,
  ContentInput,
  FileImg,
  File,
  WritingSet,
  ImgFileBox,
  ImgItem,
  ImgDelete,
} from './style';

//img
import xbtn from '../../assets/xbtn.png';
import file from '../../assets/picture.png';
import imgDelete from '../../assets/imgDelete.svg';

//library
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';

const Writing = () => {
  const navigate = useNavigate();
  //제목 작성
  const [title, setTitle] = useState('');
  //내용 작성
  const [content, setContent] = useState('');
  //파일 첨부
  const [fileURL, setFileURL] = useState([]);
  //이미지 파일 배열
  const [imageFiles, setImgaeFiles] = useState([]);
  
  const handleTitle = async () => {
    console.log(`사진 테스트: `, imageFiles);
    //폼데이터 생성
    const formData = new FormData();
    //formData.append('title', title);
    //formData.append('content', content);
    //이미지 파일을 formData에 추가
    for(let i = 0; i < imageFiles.length; i++){
      formData.append('images', imageFiles[i]);
      console.log(`사진 테스트2: `, imageFiles[i]);
    }
    const textTitle = { title: title };
    const textContent = { content: content};
    console.log(`제목: ${title}`);
    console.log(`제목 Json:`, textTitle);
    console.log(`내용: `, textContent);
    console.log(`내용 Json: ${content}`);
    console.log(`사진: ${imageFiles}`);
    //Json 하나로 묶어줌
    const sendJson = {
      title: title, 
      content: content
    };
    //for...of 루프를 사용하여 'formData' 객체의 모든 값들을 순회하고, 각 값에 대해 console.log 출력
    for (const value of formData.values()) {
      console.log(value);
    };

    try{
      await axiosInstance.post('/post/regist', sendJson);
      alert("제목을 성공적으로 작성하였습니다.");
      navigate("/community");
    } catch (error) {
      alert("글 작성을 실패하였습니다.");
    }
  };
  
  //이미지 선택 후, 임시 URL로 변환한 다음 상태 업데이트
  const handleFileChange = (e) => {
    //선택한 이미지 파일 목록을 'imageList'라는 변수에 할당
    const imageLists = e.target.files;
    setImgaeFiles(imageLists);
    //이미지 파일 자체를 저장하기 위한 배열
    let imageUrlLists = [...fileURL];
    let imageFileLists = [...imageFiles];

    for (let i = 0; i < imageLists.length; i++){
      //임시 URL 생성, 이미지를 표시하거나 저장하는 데 사용
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      //생성된 이미지 배열에 추가
      imageUrlLists.push(currentImageUrl);
      //이미지 파일을 추가
      imageFileLists.push(imageLists[i]);

    }
    if (imageUrlLists.length > 10){
      //이미지 10개를 넘어가면 배열을 잘라냄
      imageUrlLists = imageUrlLists.slice(0, 10);
    }
    //업데이트된 배열을 저장하고 렌더링 후 이미지 URL 목록 업데이트
    setFileURL(imageUrlLists);
    
  };
   //X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setFileURL(fileURL.filter((_, index) => index !== id));
    const updatedImageFileLists = [...imageFiles]; // imageFiles 배열의 복사본을 생성
  updatedImageFileLists.splice(id, 1); // 지정된 인덱스의 이미지를 제거
  setImgaeFiles(updatedImageFileLists); // 수정된 배열로 상태를 업데이트합니다.
  };

  return (
    <WritingContainer>
      <TopEmptyBox/>
      <WritingHeaderTop>
        <Link to="/community">
          <img src={xbtn} alt="글쓰기 종료 버튼" width="35"/>
        </Link>
        <WritingSet>
          <label htmlFor="fileinput">
            <FileImg src={file} alt="사진 첨부" />
          </label>
          <File type="file" id="fileinput" multiple style={{display: 'none'}}
          accept='image/*; capture=camera'
          onChange={handleFileChange}/>
          <WritingBtn onClick={handleTitle}>
            글 작성
          </WritingBtn>
        </WritingSet>
      </WritingHeaderTop>
      <TitleInput type="text" placeholder='제목' onChange={(e)=> setTitle(e.target.value)}/>
      <ContentInput type="text" placeholder='내용을 입력해 주세요' onChange={(e) => setContent(e.target.value)} rows="10"/>
      <ImgFileBox style={{
        backgroundColor: fileURL.length === 0 ? '#fff' : '#EBEBEB'
      }}>
        {fileURL.map((image, id) => (
        <div key={id} style={{display: 'flex'}}>
          <ImgItem src={image} alt="배열 이미지" />
          <ImgDelete src={imgDelete} onClick={()=> handleDeleteImage(id)}/>
        </div>
      ))}
      </ImgFileBox>
    </WritingContainer>
  );
}

export default Writing;