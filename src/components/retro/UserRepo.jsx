import * as S from './styles/RetroStyle.jsx';

export default function UserRepo({key, repoId, repoName, userName, userImg, repoDescription, repoStars, isSelected, onClick}) {
    return (
        <S.UserRepoContainer isSelected={isSelected} onClick={onClick}>
            <S.UserImgAndName>
                <S.UserImg src={userImg}></S.UserImg>
                <S.UserName>{userName}</S.UserName>
            </S.UserImgAndName>
            <S.RepoName>{repoName}</S.RepoName>
            <S.RepoDescription>{repoDescription}</S.RepoDescription>
            <S.RepoStarsAndLanguage>
                <S.RepoStars>{repoStars}</S.RepoStars>
                {/* <S.RepoLanguage>{repoUrl}</S.RepoLanguage> */}
            </S.RepoStarsAndLanguage>
        </S.UserRepoContainer>
    )
}