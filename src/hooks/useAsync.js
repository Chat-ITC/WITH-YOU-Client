import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

//첫 번째 파라미터는 API 요청을 시작하는 함수
//두 번째 파라미터는 deps, 해당 함수 안에서 사용하는 useEffect 의 deps로 설정된다. 기본값은 `[]` 컴포넌트가 가장 처음 렌더링할 때만 API를 호출
function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  //반환하는 값은 요청 관련 상태와, fetchData 함수. fetchData 함수를 반환하여 나중에 데이터를 쉽게 리로딩할 수 있다.
  return [state, fetchData];
}

export default useAsync;