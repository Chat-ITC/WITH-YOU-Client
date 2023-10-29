// store.js - 리덕스 툴킷을 사용하여 store를 설정하고 구성하는 역할
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Redux Toolkit을 사용하여 슬라이스(객체)를 생성
//슬라이스는 상태와 상태 변경을 다루는데 필요한 여러 정보를 묶어주는 역할
//슬라이스(객체)를 생성하고 visibilitySlice.reducers로 상태와 액션을 얻을 수 있다.
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



// 슬라이스의 액션을 외부로 내보냄
export const { toggleAsideVisibility } = visibilitySlice.actions;

// 슬라이스 리듀서를 생성
const rootReducer = {
  visibility: visibilitySlice.reducer,
};

// configureStore 함수를 사용하여 리덕스 스토어 생성하여
//rootReducer로 지정된 리듀서들을 사용한다고 설정하는 부분
const store = configureStore({
  //rootReducer: store.js에서 생성된 리듀서들을 하나로 합쳐주는 편리한 객체
  reducer: rootReducer,
});

export default store;
