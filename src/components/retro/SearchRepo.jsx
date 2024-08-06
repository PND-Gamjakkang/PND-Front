import * as S from './styles/RetroStyle.jsx';
import { useState } from 'react';

// images
import SearchIcon from '../../assets/images/search-icon.png';
import ProfileImg from '../../assets/images/profile-img.png';

// component
import UserRepo from './UserRepo.jsx';

function SearchRepo({ onNext }) {
    const [selectedRepo, setSelectedRepo] = useState(null);

    const handleRepoClick = (repoName) => {
        if (selectedRepo === repoName) {
            setSelectedRepo(null); // 이미 선택된 경우, 선택 해제
        } else {
            setSelectedRepo(repoName); // 새로운 항목 선택
            onNext();
        }
    };

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
                <S.Button>Search</S.Button>
            </S.SearchContainer>
            {/* 통신 -> map 사용해서 레포지토리 개수만큼 불러오기*/}
            <UserRepo 
            userName={userName}
            userImg={ProfileImg}
            repoName={repoName}
            repoDescription={repoDescription}
            repoStars={repoStars}
            repoUrl={repoUrl}
            isSelected={selectedRepo === repoName}
            onClick={() => handleRepoClick(repoName)}
            />

        </S.SearchRepo>
    )
}

export default SearchRepo;