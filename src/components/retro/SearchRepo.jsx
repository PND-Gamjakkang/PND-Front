import * as S from './styles/RetroStyle.jsx';

// images
import SearchIcon from '../../assets/images/search-icon.png';


function SearchRepo() {
    return (
        <S.SearchContainer>
            <S.SearchIconImg src={SearchIcon}/>
            <S.InputBox></S.InputBox>
            <S.Button margin="8px">Search</S.Button>
        </S.SearchContainer>
    )
}

export default SearchRepo;