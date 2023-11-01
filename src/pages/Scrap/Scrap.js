//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  FromBox,
  BtnBox,
  HistoryBtn,
  CommunityBtn,
  RadioText,
} from './style';
//library
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
//components
import ScrapHeader from '../../components/ScrapHeader';
import HistoryItemBody from '../../components/HistoryItemBody';
import Search from '../../components/SearchInput';
import LogoBody from '../../components/LogoBody';
import ScrapCommunityItem from '../../components/ScrapCommunityItem';
import MyModal from '../../components/Modal';

const Scrap = () => {
  //화면 변환
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  
  //검색한데이터
  const [searchWord, setSearchWord] = useState('');
  //스크랩 페이지 메인에 출력할 데이터를 저장
  const [bodyData, setBodyData] = useState({content:"camera"});
  
  //히스토리 클릭했을 때 리스트
  const historyBodySectionHandler = async (props) => {
    if(props !== '0'){
      try{
        const response = await axiosInstance.get('/question',
        {params:{id:props}});
        setBodyData(response.data);
      } catch (error) {
        console.log("에러1: ", error);
      }
    }
  }

  //히스토리 리스트 
  const RequestCommunity = async() => {
    try{
      const response = await axiosInstance.get('/scrap/list');
      
      if(response.data.length !== 0){
      setCameraListData(response.data);
      console.log('히스토리', response.data);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  
  const RequestHistory = async() => {
      try{
        const response = await axiosInstance.get('/scrap/post/list');
        console.log("커뮤니티", response.data);
        setCommunityListData(response.data)
      }
      catch(error){
        console.log(error);
      }
  } 
  //커뮤니티 클릭했을 때 리스트
    const communityBodySectionHandler = async(props) => {
      
    if(props!=='0'){
      try{console.log("id확인", props);
        const response = await axiosInstance.get('/post',
        {params:{id:props}});
        setBodyData(response.data.postLookupDto)
        console.log("스크랩 커뮤니티: ", response.data);
      }
      catch(error){
        console.log(error);
      }
    }
  }
    
  const [cameraListData, setCameraListData] = useState([]);
  const [communityListData, setCommunityListData] = useState([]);
  //히스토리 - 커뮤니티 라디오버튼 
  const [historyToggle, setHistoryToggle] = useState(true);
  const [communityToggle, setCommunityToggle] = useState(false);
  const historyRadio = () => {
    setHistoryToggle(true);
    setCommunityToggle(false);
    setCameraListData(cameraListData);
  };

  const communityRadio = () => {
    setHistoryToggle(false);
    setCommunityToggle(true);
    setCommunityListData(communityListData);
  };

  useEffect(() => {
    RequestCommunity();
  }, [historyToggle])

  const isOpen = useSelector((state) => state.modal.isOpen);
  console.log("모달 상태 확인: ", isOpen);
  
  const dispatch = useDispatch();
  const Modal = () => {
    dispatch(openModal())
  }

  return (
    <>
      <Aside>
        <TopEmptyBox/>
        <TopLeftHeader>Scrap</TopLeftHeader>
        <FromBox><Search
        onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
        <BtnBox>
          <HistoryBtn
            onClick={()=>{
              historyRadio();
              RequestCommunity();
            }}
            $done={historyToggle}>
            <RadioText>
              히스토리
            </RadioText>
          </HistoryBtn>
          <CommunityBtn
            onClick={()=>{
              //ReuestHistory가 수행된 후 CommunityRradio가 수행?
              RequestHistory();
              communityRadio();
            }}
            $done={communityToggle}>
            <RadioText>
              커뮤니티
            </RadioText>
          </CommunityBtn>
        </BtnBox>
        {historyToggle ? cameraListData.map((sample, index) => (
            <div
            key={index}
            onClick={()=>{
              historyBodySectionHandler(sample.id)
            }}>
            <HistoryItemBody
              id={sample.id}
              searchWord={searchWord}
              key={index}
              title={sample.title}
              body={sample.content}
              date={sample.date}
              $scrap={sample.isScrap}
            />
          </div>
        )) : communityListData.map((sample, index) => (
            <div
            onClick={() => {
              console.log("스크랩 눌렀을 때 번호 확인: ", sample.postId);
              communityBodySectionHandler(sample.postId)
            }}
            key={index}>
            <ScrapCommunityItem
              searchWord={searchWord}
              key={index}
              title={sample.title}
              // $picture={sample.picture}
              content={sample.content}
              // like={sample.like}
              commentCount={sample.commentCount}
              $scrap={sample.isScrap}//유효한 값인지 확인
              createdCount={sample.createdCount}
            />
          </div>
          
        ))
      }
        <BottomEmptyBox/>
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <ScrapHeader />
        <TopEmptyBox />
        <LogoBody
          bodyData={bodyData.content}
        />
        {isOpen && (
          <MyModal onClose={Modal}/>
        )}
        <BottomEmptyBox />
      </Main>
    </>
  );
}

export default Scrap;