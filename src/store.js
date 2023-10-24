// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  isAsideVisible: false,
};

// Redux Toolkit을 사용하여 슬라이스를 생성
const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
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

// 스토어 생성
const store = configureStore({
  reducer: rootReducer,
});

export default store;
