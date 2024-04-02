//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  FromBox,
} from './style';
//library
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
//components
import CommunityHeader from '../../components/CommunityHeader';
import CommunityItem from '../../components/CommunityItem/CommunityItem';
import CommunityBodySection from '../../components/CommunityBodySection';
import Search from '../../components/SearchInput';

const Community = () => {
  //화면 변환
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);



  //검색한 데이터
  const [searchWord, setSearchWord] = useState('');
  const [bodyData, setBodyData] = useState({content: "community"});
  const [communityListData, setCommunityListData] = useState([]);
  const [Comment, setComment] = useState([]);
  //커뮤니티 리스트 데이터 불러오기
  const requestCommunity = async () => {
    try {
      const response = await axiosInstance.get('/post/lookup');
      if(response.data){
        setCommunityListData(response.data);
        console.log('response.data',response.data);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestCommunity();
  }, [])

  return (
    <>
      <Aside>
        <TopEmptyBox/>
        <TopLeftHeader>Community</TopLeftHeader>
        <FromBox><Search
          onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
        {communityListData.map((sample, index) => (
            <div
            key={index}>
            <CommunityItem
              id={sample.id}
              searchWord={searchWord}
              key={index}
              title={sample.title}
              commentCount={sample.commentCount}
              // $picture={sample.picture}
              content={sample.content}
              // like={sample.like}
              date={sample.createdDate}
              img={sample.imageUrl}
            />
          </div>
        ))}
        <BottomEmptyBox/>
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <CommunityHeader/>
        <TopEmptyBox />
            <CommunityBodySection
              id={bodyData.id}
              userNickName={bodyData.userNickName}
              userMajor={bodyData.userMajor}
              title={bodyData.title}
              // $picture={bodyData.picture}
              content={bodyData.content}
              // like={bodyData.like}
              commentCount={bodyData.commentCount}
              $scrap={bodyData.isScrap}
              createdDate={bodyData.createdDate}
              comments={Comment}
            />
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Community;