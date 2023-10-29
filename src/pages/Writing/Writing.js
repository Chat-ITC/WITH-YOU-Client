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
  //이지미 파일 배열
  const [imageFiles, setImgaeFiles] = useState([]);
  
  const handleTitle = async () => {
    //폼데이터 생성
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    //이미지 파일을 formData에 추가
    for(let i = 0; i < imageFiles.length; i++){
      formData.append('images', imageFiles[i]);
    }
    const textTitle = { title: title };
    const textContent = { content: content};
    console.log(`제목: ${title}`);
    console.log(`제목 Json:`, textTitle);
    console.log(`내용: `, textContent);
    console.log(`내용 Json: ${content}`);
    console.log(`사진: ${fileURL}`);

    try{
      await axiosInstance.post('', formData);
      alert("제목을 성공적으로 작성하였습니다.");
      navigate("/community");
    } catch (error) {
      alert("글 작성을 실패하였습니다.");
    }
  };
  
  //이미지 선택 후, 임시 URL 대신 파일 그대로 FormData에 추가
  const handleFileChange = (e) => {
    //선택한 이미지 파일 목록을 'imageList'라는 변수에 할당
    const imageLists = e.target.files;

    //이미지 파일 자체를 저장하기 위한 배열
    let imageFileLists = [...imageFiles];

    for (let i = 0; i < imageLists.length; i++){
      //이미지 파일을 추가
      imageFileLists.push(imageLists[i]);
    }

    //이미지 파일을 FormData에 직접 추가
    setImgaeFiles(imageFileLists);
  };
   //X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    //id에 해당하는 인덱스를 제외한 나머지 이미지URL을 선택하여, 새로운 배열에 저장
    const updatedImageFileLists = imageFiles.filter((_, index) => index !== id);
    //이미지 파일 배열 상태 업데이트
    setImgaeFiles(updatedImageFileLists);
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
          <ImgItem src={image} alt={`${image}-${id}`} />
          <ImgDelete src={imgDelete} onClick={()=> handleDeleteImage(id)}/>
        </div>
      ))}
      </ImgFileBox>
    </WritingContainer>
  );
}

export default Writing;