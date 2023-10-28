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
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

const Writing = () => {
  const [fileURL, setFileURL] = useState([]);

  const handleFileChange = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...fileURL];

    for (let i = 0; i < imageLists.length; i++){
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10){
      imageUrlLists = imageUrlLists.slice(0, 10);
    }
    setFileURL(imageUrlLists);
  };
   // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setFileURL(fileURL.filter((_, index) => index !== id));
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
          <WritingBtn>
            글 작성
          </WritingBtn>
        </WritingSet>
      </WritingHeaderTop>
      <TitleInput type="text" placeholder='제목'/>
      <ContentInput type="text" placeholder='내용을 입력해 주세요' rows="10"/>
      <ImgFileBox>
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