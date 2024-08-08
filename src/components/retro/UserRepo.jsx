import * as S from './styles/RetroStyle.jsx';

export default function UserRepo({userImg, userName,repoName, repoDescription, repoUrl, repoStars}) {
    return (
        <S.UserRepoContainer>
            <S.UserImgAndName>
                <S.UserImg src={userImg}></S.UserImg>
                <S.UserName>{userName}</S.UserName>
            </S.UserImgAndName>
            <S.RepoName>{repoName}</S.RepoName>
            <S.RepoDescription>{repoDescription}</S.RepoDescription>
            <S.RepoStarsAndLanguage>
                <S.RepoStars>{repoStars}</S.RepoStars>
                <S.RepoLanguage>{repoUrl}</S.RepoLanguage>
            </S.RepoStarsAndLanguage>
        </S.UserRepoContainer>
    )
}