// store.js - 리덕스 툴킷을 사용하여 store를 설정하고 구성하는 역할
import { configureStore, createSlice } from '@reduxjs/toolkit';
// Redux Toolkit을 사용하여 슬라이스(객체)를 생성
//슬라이스는 상태와 상태 변경을 다루는데 필요한 여러 정보를 묶어주는 역할
//슬라이스(객체)를 생성하고 visibilitySlice.reducers로 상태와 액션을 얻을 수 있다.

const visibilityModal = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = !state.isOpen;
      console.log("상태 전달 확인: ", state.isOpen);
    },
  },
});

const visibilitySlice = createSlice({
  //'visibility': 해당 슬라이스의 이름
  name: 'visibility',
  initialState: {
    isAsideVisible: false,
  },
  //reducers 객체안에 액션 및 액션 생성자함수 정의
  reducers: {
    toggleAsideVisibility: (state) => {
      state.isAsideVisible = !state.isAsideVisible;
    },
  },
});

const selectStateSlice = createSlice({ 
  name: 'CameraItemId',
  initialState: {
    id: '0',
    scrap: 'basic',
    bodyData: { content: "camera" },
    commentData: { content: "" },
    imgURL: null
  },
  reducers: {
    selectId:(state, action) => {
      console.log("state: ", state);
      console.log("지정action: ", action.payload);
      state.id = action.payload;
    },
    scrapId:(state, action) => {
      state.scrap = action.payload;
      console.log("스크랩 action: ", action.payload);
    },
    historyBody:(state, action) => {
      state.bodyData = action.payload;
      console.log("바디데이터 action: ", action.payload);
    },
    commentBody:(state, action) => {
      state.commentData = action.payload;
      console.log("댓글데이터 action: ", action.payload);
    },
    img:(state, action) => {
      state.imgURL = action.payload;
      console.log("URL데이터 action: ", action.payload);
    },
    deleteId:(state, action) => {
      state.id = action.payload;
      console.log("삭제 action: ", action.payload);
    }
  }
});




// 슬라이스의 액션을 외부로 내보냄
export const { toggleAsideVisibility } = visibilitySlice.actions;

export const { selectId, scrapId, historyBody, commentBody, img, deleteId } = selectStateSlice.actions;

export const { openModal } = visibilityModal.actions;

// 슬라이스 리듀서를 생성
const rootReducer = {
  visibility: visibilitySlice.reducer,
  CameraItemId: selectStateSlice.reducer,
  modal: visibilityModal.reducer
};

// configureStore 함수를 사용하여 리덕스 스토어 생성하여
//rootReducer로 지정된 리듀서들을 사용한다고 설정하는 부분
const store = configureStore(
  {
  //rootReducer: store.js에서 생성된 리듀서들을 하나로 합쳐주는 편리한 객체
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
