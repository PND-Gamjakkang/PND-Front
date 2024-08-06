import * as S from './styles/RetroStyle.jsx';

// images
import SearchIcon from '../../assets/images/search-icon.png';

import UserRepo from './UserRepo.jsx';

function SearchRepo() {
    const userName = "yebin";
    const userImg = "sdf";
    const repoName = "pnd";
    const repoUrl = "http";
    const repoDescription = "sdfsdfsdf";
    const repoStars = '5';

    return (
        <S.SearchRepo>
            <S.SearchContainer>
                <S.SearchIconImg src={SearchIcon}/>
                <S.InputBox></S.InputBox>
                <S.Button margin="8px">Search</S.Button>
            </S.SearchContainer>
            <UserRepo 
            userName={userName}
            userImg={userImg}
            repoName={repoName}
            repoDescription={repoDescription}
            repoStars={repoStars}
            repoUrl={repoUrl}
            />

        </S.SearchRepo>
    )
}

export default SearchRepo;