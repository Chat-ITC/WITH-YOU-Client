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
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//components
import CommunityHeader from '../../components/CommunityHeader';
//components
import CommunityItem from '../../components/CommunityItem';
import CommunityBodySection from '../../components/CommunityBodySection';
import Search from '../../components/SearchInput';

const Community = () => {
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);

  const [bodyData, setBodyData] = useState("camera");
  const bodySectionHandler = (props) => {
    //목록에서 아이템 누를 시 서버로 id 전송후 데이터 받아오기 props: 아이디.
    setBodyData(`아이템 아이디: ${props.title}`)
  }

  const sampleJson = [
    {
      id: "1",
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
      title: "머신러닝 시험범위 아시는 분?",
      picture:false,
      body: "몇 장까지인지 알려주세요..",
      like: 1,
      chat: 1,
      scrap: true,
      date: "10/26",
    },
  ];

  return (
    <>
      <Aside>
        <TopEmptyBox/>
        <TopLeftHeader>Community</TopLeftHeader>
        <FromBox><Search/></FromBox>
        {sampleJson.map((sample, index) => (
          <div
            onClick={() => {
              bodySectionHandler(sample)
            }}
            key={index}>
            <CommunityItem
              key={index}
              title={sample.title}
              $picture={sample.picture}
              body={sample.body}
              like={sample.like}
              chat={sample.chat}
              $scrap={sample.scrap}
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
          bodyData={bodyData}
        />
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Community;