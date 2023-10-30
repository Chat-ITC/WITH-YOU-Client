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
import CommunityItem from '../../components/CommunityItem';
import CommunityBodySection from '../../components/CommunityBodySection';
import Search from '../../components/SearchInput';

const Community = () => {
  //화면 변환
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);

  //검색한 데이터
  const [searchWord, setSearchWord] = useState('');
  const [bodyData, setBodyData] = useState({content:"community"});
  const [scrapId, setScrapId] = useState('');

  const requestCommunity = async () => {
    try {
      const response = await axiosInstance.get('/question/list');
      console.log(response.data.length);
      if(response.data.length !== 0){
        setCameraListData(response.data);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestCommunity();
  }, [])

  const bodySectionHandler = async (props) => {
    console.log(props);
    if(props!=='0'){
      try{
        const response = await axiosInstance.get('/question',
        {params:{id:props}});
        console.log(response);
        setBodyData(response.data)
      }
      catch(error){
        console.log(error);
      }
      setScrapId(props)
    }
  }

  const commentJson = [
    {
      id: "1",
      nickname: "맛있는 라면",
      major: "작업치료학과",
      body: "이번주 머신러닝 수업 때 경사하강법에 대해서 배웠습니다. 경사하강법에서 가장 중요한 것은 잔차이고 잔차제곱합을 이용해서 여러가지 문제들을 해결할 수 있습니다",
      date: "10/25",
    },
    {
      id: "2",
      nickname: "야식은 족발이지",
      major: "건축학과",
      body: "저는 수업을 나갔는 데 자서 하나도 모르겠네요..",
      date: "10/28",
    },
  ];

  const [cameraListData,setCameraListData] = useState([]);

  return (
    <>
      <Aside>
        <TopEmptyBox/>
        <TopLeftHeader>Community</TopLeftHeader>
        <FromBox><Search
          onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
        {cameraListData.map((sample, index) => (
            <div
            onClick={() => {
              bodySectionHandler(sample.id)
            }}
            key={index}>
            <CommunityItem
              searchWord={searchWord}
              key={index}
              title={sample.title}
              $picture={sample.picture}
              body={sample.content}
              like={sample.like}
              chat={sample.chat}
              $scrap={sample.isScrap}
              date={sample.date}
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
              nickname={bodyData.nickname}
              major={bodyData.major}
              title={bodyData.title}
              $picture={bodyData.picture}
              bodyData={bodyData.content}
              like={bodyData.like}
              chat={bodyData.chat}
              $scrap={bodyData.isScrap}
              date={bodyData.date}
              commentid={commentJson[0].id}
              commentnickname={commentJson[0].nickname}
              commentmajor={commentJson[0].major}
              commentbody={commentJson[0].body}
              commentdate={commentJson[0].date}
            />
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Community;