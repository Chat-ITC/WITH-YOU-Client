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

  const [searchWord, setSearchWord] = useState('');

  const [bodyData, setBodyData] = useState("camera");

  const bodySectionHandler = (props) => {
    //목록에서 아이템 누를 시 서버로 id 전송후 데이터 받아오기 props: 아이디.
    setBodyData(`아이템 아이디: ${props}`)
  }

  const sampleJson = [
    {
      id: "1",
      nickname: "감흥없는 김밥",
      major: "의료IT공학과",
      title: "운영체제 스레드 부분 궁금한 거 있어요",
      picture: true,
      body: "대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.",
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

  const commentJson = [
    {
      id: "1",
      nickname: "맛있는 라면",
      department: "작업치료학과",
      body: "이번주 머신러닝 수업 때 경사하강법에 대해서 배웠습니다. 경사하강법에서 가장 중요한 것은 잔차이고 잔차제곱합을 이용해서 여러가지 문제들을 해결할 수 있습니다",
      date: "10/25",
    },
    {
      id: "2",
      nickname: "야식은 족발이지",
      department: "건축학과",
      body: "저는 수업을 나갔는 데 자서 하나도 모르겠네요..",
      date: "10/28",
    },
  ];

  return (
    <>
      <Aside>
        <TopEmptyBox/>
        <TopLeftHeader>Community</TopLeftHeader>
        <FromBox><Search
          onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
        {sampleJson.map((sample, index) => (
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
              id={sampleJson[0].id}
              nickname={sampleJson[0].nickname}
              major={sampleJson[0].major}
              title={sampleJson[0].title}
              $picture={sampleJson[0].picture}
              body={sampleJson[0].body}
              like={sampleJson[0].like}
              chat={sampleJson[0].chat}
              $scrap={sampleJson[0].scrap}
              date={sampleJson[0].date}
              commentid={commentJson[0].id}
              commentnickname={commentJson[0].nickname}
              commentbody={commentJson[0].body}
              commentdate={commentJson[0].date}
            />
        {/* <CommunityBodySection
          bodyData={bodyData}
        /> */}
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Community;