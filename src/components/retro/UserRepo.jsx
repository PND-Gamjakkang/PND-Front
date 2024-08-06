import * as S from './styles/RetroStyle.jsx';

export default function UserRepo({userImg, userName,repoName, repoDescription, repoUrl, repoStars}) {
    return (
        <S.UserRepoContainer>
            <S.UserProfileBox>
                {userImg}{userName}
            </S.UserProfileBox>
            <S.RepoNameBox>{repoName}</S.RepoNameBox>
            <S.RepoDescriptionBox>{repoDescription}</S.RepoDescriptionBox>
            <S.RepoStarsAndLanguageBox>{repoStars}{repoUrl}</S.RepoStarsAndLanguageBox>
        </S.UserRepoContainer>
    )
}