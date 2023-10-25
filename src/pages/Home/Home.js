//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
} from './style';
//library
import React from 'react';
import { useSelector } from 'react-redux';
//components
import CameraHeader from '../../components/CameraHeader';

//library
import { Link } from 'react-router-dom';

//components
import CameraItem from '../../components/CameraItem';

const Home = () => {
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);

  const sampleJson = [
    {
      title: "대양 대순환 해류의 주기",
      body: "대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.",
      date: "10/25",
      scrap: true
    },
    {
      title: "원빈이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    }
  ];

  console.log("로그1", sampleJson);
  console.log("로그2", sampleJson[0]);
  console.log("로그3", sampleJson[0].title);
  console.log("로그4", sampleJson[1].date);

  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>History</TopLeftHeader>
        {sampleJson.map((sample, index) => (
          <CameraItem
          key={index}
            title={sample.title}
            body={sample.body}
            date={sample.date}
            $scrap={sample.scrap}
          />
        ))}
        <BottomEmptyBox>
        </BottomEmptyBox>
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <CameraHeader></CameraHeader>
        <TopEmptyBox/>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>

        <p>
          야
        </p>
        <p>
          야
        </p>

        <p>
          야
        </p>

        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ

        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>

        <p>
          야
        </p>
        <p>
          야
        </p>

        <p>
          야
        </p>

        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ

        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>

        <p>
          야
        </p>
        <p>
          야
        </p>

        <p>
          야
        </p>

        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야
        </p>
        <p>
          야아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ

        </p>
        <BottomEmptyBox>
        </BottomEmptyBox>
      </Main>
    </>
  );
}

export default Home;