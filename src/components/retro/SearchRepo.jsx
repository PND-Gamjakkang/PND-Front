import * as S from './styles/RetroStyle.jsx';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

// images
import SearchIcon from '../../assets/images/search-icon.png';
import ProfileImg from '../../assets/images/profile-img.png';

// component
import UserRepo from './UserRepo.jsx';

function SearchRepo({ onNext, onPrev, user}) {
    const [selectedRepo, setSelectedRepo] = useState(null);
    const [repos, setRepos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    const elementRef = useRef(null);
    
    const userToken = localStorage.getItem('token');
    
    // api 통신
    const fetchRepository = async () => {
        // api 불러오기
        try {
            const response = await axios({
                method: "GET",
                url: `http://localhost:8080/api/pnd/user/repository`,
                headers: {
                    'Authorization': `Bearer ${userToken}`, // Authorization 헤더에 토큰을 포함
                    'Content-Type': 'application/json' // JSON 형식의 요청 본문
                },
                //params: { page } // 페이지 번호를 쿼리 파라미터로 추가
            })
            if (response.status === 200) {
                console.log("레포 통신 성공 : ");
                const data = response.data.data;
                // 데이터가 배열인지 확인하고 배열로 변환
                const newRepos = Array.isArray(data) ? data : [data];
                console.log(newRepos);

                setRepos((prevRepos) => [...prevRepos, ...newRepos]);
    
                setPage((prevPage) => prevPage + 1);
                if (newRepos.length === 0) {
                    setHasMore(false);
                }
            } else {
                console.error("HTTP error: ", response.status, response.statusText);
            }
    
        } catch (err) {
            console.log("repository error");
        }

    };

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

    const onIntersection = (entries) => {
        const firstEntry = entries[0];
        if(firstEntry.isIntersecting && hasMore) {
            fetchRepository();
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);

        if(elementRef.current) {
            observer.observe(elementRef.current);
        }

        return() => {
            if(elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        }
    },[hasMore]);


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
                    repoId={repo.id}
                    userName={user.name}
                    userImg={user.image}
                    repoName={repo.name}
                    repoDescription={repo.description}
                    repoStars={repo.stars}
                    repoLanguage={repo.language}
                    repoForks={repo.forksCount}
                    repoOpenIssues={repo.openIssues}
                    repoWatchers={repo.watchers}
                    repoCreatedAt={repo.createdAt}
                    // repoUrl={repo.repoUrl}
                    isSelected={selectedRepo === repo.name}
                    onClick={() => handleRepoClick(repo.name)}
                />
            ))}
            {hasMore && (
                <div ref={elementRef} style={{textAlign: 'center'}}>
                    Load More Repository
                </div>
            )}

        </S.SearchRepo>
    )
}

export default SearchRepo;