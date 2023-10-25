import { 
  SearchBox,
  SearchForm, 
  Search,
} from './style';

  import SearchImg from '../assets/search.png';

const SearchInput = () => {
  return (
    <SearchBox>
      <SearchForm/>
      <Search src={SearchImg} alt="검색 버튼" />
    </SearchBox>
  );
}

export default SearchInput;