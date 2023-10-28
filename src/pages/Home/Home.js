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
import CameraHeader from '../../components/CameraHeader';
import CameraBodySection from '../../components/CameraBodySection';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';

//components
import CameraItem from '../../components/CameraItem';
import Search from '../../components/SearchInput';

const Home = () => {
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  //검색한데이터
  const [searchWord, setSearchWord] = useState('');

  const [bodyData, setBodyData] = useState("camera");
  const [scrapId, setScrapId] = useState('');
  const requestHistory = async () => {
    try {
      const response = await axiosInstance.get('/question/list');
      setCameraListData(response.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestHistory();
  }, [])


  const bodySectionHandler = async(props) => {
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

  const sampleJson = [
    {
      id: "1",
      title: "대양 대순환 해류의 주기",
      body: "대양 대순환 해류의 1만년 주기적인 변화는 여러 자연적인 요인과 연관되어 있습니다. 이러한 주기적인 변화는 미소록 주기라고도 불리며, 기후 시스템에서 중요한 역할을 합니다.",
      date: "10/25",
      scrap: true
    },
    {
      id: "2",
      title: "시훈이가 야성해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "3",
      title: "시훈이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "4",
      title: "지성이가 야성해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "5",
      title: "야성이가 지성해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: true
    },
    {
      id: "6",
      title: "야준이가 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
    {
      id: "7",
      title: "장다빈이 멍청해요",
      body: "빙하 시대와 간대기 기후 변화: 미소록 주기는 지구의 기후 시스템에서 중요한 변화를 가져옵니다. 빙하 시대와 간대기 온난 기간 사이의 빠른 기후 변화와 연관되어 있습니다. 이 주기는 지구의 태양 복사량, 지구의 궤도 움직임, 그리고 바다와 대기의 상호 작용과 같은 여러 복잡한 요인들에 의해 조절됩니다",
      date: "10/26",
      scrap: false
    },
  ];


  const [cameraListData,setCameraListData] = useState(sampleJson);

  
  return (
    <>
      <Aside>
        <TopEmptyBox></TopEmptyBox>
        <TopLeftHeader>History</TopLeftHeader>
        <FromBox><Search
        onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
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
              body={sample.content}
              date={sample.date}
              $scrap={sample.scrap}
            />
          </div>
        ))}
        <BottomEmptyBox/>
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <CameraHeader/>
        <TopEmptyBox />
        <CameraBodySection
          bodyData={bodyData.content}
          id={scrapId}
        />
        <BottomEmptyBox/>
      </Main>
    </>
  );
}

export default Home;