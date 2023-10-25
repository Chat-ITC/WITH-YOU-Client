import { 
  SearchForm, 
  Search,
} from './style';

  import SearchImg from '../assets/search.png';

const SearchInput = () => {
  return (
    <>
      <SearchForm/>
      <img src={SearchImg} alt="검색 버튼" />
    </>
  );
}

export default SearchInput;