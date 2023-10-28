import {useState} from 'react'

import { 
  SearchBox,
  SearchForm, 
  Search,
} from './style';

  import SearchImg from '../assets/search.png';

const SearchInput = ({onDataSearch}) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SearchBox>
      <SearchForm
      placeholder="검색어를 입력하세요."
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
        onDataSearch(e.target.value);
      }
      }
      />
      <Search 
      src={SearchImg}
      alt="검색 버튼"/>
    </SearchBox>
  );
}

export default SearchInput;