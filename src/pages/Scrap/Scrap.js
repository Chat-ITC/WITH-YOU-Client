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
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//components
import ScrapHeader from '../../components/ScrapHeader';
import CameraItem from '../../components/CameraItem';
import Search from '../../components/SearchInput';
import CameraBodySection from '../../components/CameraBodySection';

const Home = () => {
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);

  //검색한데이터
  const [searchWord, setSearchWord] = useState('');

  const [bodyData, setBodyData] = useState("camera");

  const bodySectionHandler = (props) => {
    //목록에서 아이템 누를 시 서버로 id 전송후 데이터 받아오기 props: 아이디.
    setBodyData(`아이템 아이디: ${props}`)
  }

  //히스토리 - 커뮤니티 라디오버튼 
  const [historyToggle, setHistoryToggle] = useState(true);
  const [communityToggle, setCommunityToggle] = useState(false);
  const historyRadio = () => {
    setHistoryToggle(true);
    setCommunityToggle(false);
    setCameraListData(sampleJsonHistory);
  };

  const communityRadio = () => {
    setHistoryToggle(false);
    setCommunityToggle(true);
    setCameraListData(sampleJsonCommunity);
  };



  const sampleJsonHistory = [
    {
      id: "1",
      title: "대양 대순환 해류의 주기",
      body: "대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.",
      date: "10/25",
      scrap: true
    },
    {
      id: "2",
      title: "원빈이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "3",
      title: "원빈이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "4",
      title: "원빈이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "5",
      title: "야성이가 지성해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "6",
      title: "야준이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },

  ];

  const sampleJsonCommunity = [
    {
      id: "1",
      nickname: "감흥없는 김밥",
      major: "의료IT공학과",
      title: "운영체제 스레드 부분 궁금한 거 있어요",
      picture: true,
      body: "대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.",
      like: 3,
      chat: 1
      ,
      scrap: true,
      date: "10/25",
    },
    {
      id: "2",
      nickname: "감흥없는 치킨",
      major: "건축학과",
      title: "머신러닝 이번주 수업 내용 질문입니다.",
      picture: true,
      body: "머신러닝 이번주 수업 안 들어서 하나도 모르는 데 경사하강법 부분 진짜 무슨 말인지 하나도 이해가 안되네요.. 혹시 친절하게 설명해주실 수 있는 분 계신가요..?",
      like: 5,
      chat: 1
      ,
      scrap: true,
      date: "10/28",
    },
  ];

  const [cameraListData, setCameraListData] = useState(sampleJsonHistory);

  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>Scrap</TopLeftHeader>
        <FromBox><Search
        onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
        <BtnBox>
          <HistoryBtn
            onClick={historyRadio}
            $done={historyToggle}>
            <RadioText>
              히스토리
            </RadioText>
          </HistoryBtn>
          <CommunityBtn
            onClick={communityRadio}
            $done={communityToggle}>
            <RadioText>
              커뮤니티
            </RadioText>
          </CommunityBtn>
        </BtnBox>
        {cameraListData.map((sample, index) => (
          <div
            onClick={() => {
              bodySectionHandler(sample.id)
            }}
            key={index}>
            <CameraItem
              searchWord={searchWord}
              key={index}
              title={sample.title}
              body={sample.body}
              date={sample.date}
              $scrap={sample.scrap}
            />
          </div>
        ))}
        <BottomEmptyBox>
        </BottomEmptyBox>
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <ScrapHeader />
        <TopEmptyBox />
        <CameraBodySection
          bodyData={bodyData}
        />
        <BottomEmptyBox />
      </Main>
    </>
  );
}

export default Home;