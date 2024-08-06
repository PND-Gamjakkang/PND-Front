import * as S from './styles/RetroStyle.jsx';

export default function UserRepo({userImg, userName,repoName, repoDescription, repoUrl, repoStars}) {
    return (
        <S.UserRepoContainer>
            <S.UserProfile>
                {userImg} {userName}
            </S.UserProfile>
            <S.RepoNameBox>{repoName}</S.RepoNameBox>
            <S.RepoDescriptionBox></S.RepoDescriptionBox>
            <S.RepoStarsAndLanguage></S.RepoStarsAndLanguage>
        </S.UserRepoContainer>
    )
}