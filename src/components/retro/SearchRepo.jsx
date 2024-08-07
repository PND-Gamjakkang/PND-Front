import * as S from './styles/RetroStyle.jsx';
import { useEffect, useState } from 'react';

// images
import SearchIcon from '../../assets/images/search-icon.png';
import ProfileImg from '../../assets/images/profile-img.png';

// component
import UserRepo from './UserRepo.jsx';

function SearchRepo({ onNext, onPrev }) {
    const [selectedRepo, setSelectedRepo] = useState(null);

    const handleRepoClick = (repoName) => {
        if (selectedRepo === repoName) {
            setSelectedRepo(null); // 이미 선택된 경우, 선택 해제
            onPrev();
        } else if(selectedRepo === null) { // 처음 눌렀을 때, 다른 거 눌렀을 때
            setSelectedRepo(repoName); // 새로운 항목 선택
            onNext();
        } else {
            setSelectedRepo(repoName); // 다른 레포 선택된 경우, 선택 해제
        }
    };

    // 선택된 레포 확인
    useEffect(() => {
        console.log(selectedRepo);

    },[selectedRepo])

    const repos = [
        {
            index:1,
            userName: "yebin",
            userImg: ProfileImg,
            repoName: "pnd",
            repoUrl: "http",
            repoDescription: "sdfsdfsdf",
            repoStars: '5'
        },
        {
            index:2,
            userName: "hejin",
            userImg: ProfileImg,
            repoName: "P-nd",
            repoUrl: "http",
            repoDescription: "sdfsdfsdf",
            repoStars: '5'
        }
    ];

    return (
        <S.SearchRepo>
            <S.SearchContainer>
                <S.SearchIconImg src={SearchIcon}/>
                <S.InputBox></S.InputBox>
                <S.Button>Search</S.Button>
            </S.SearchContainer>
            {/* 통신 -> map 사용해서 레포지토리 개수만큼 불러오기*/}
            {repos.map((repo, index) => (
                <UserRepo 
                    key={index}
                    userName={repo.userName}
                    userImg={repo.userImg}
                    repoName={repo.repoName}
                    repoDescription={repo.repoDescription}
                    repoStars={repo.repoStars}
                    repoUrl={repo.repoUrl}
                    isSelected={selectedRepo === repo.repoName}
                    onClick={() => handleRepoClick(repo.repoName)}
                />
            ))}

        </S.SearchRepo>
    )
}

export default SearchRepo;