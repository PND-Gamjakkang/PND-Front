import * as S from './styles/RetroStyle.jsx';

import starImg from '../../assets/images/star.png';
import forkImg from '../../assets/images/fork-img.png';

export default function UserRepo({key, repoId, repoName, userName, userImg, repoDescription, repoStars, repoLanguage, repoForks, repoOpenIssues, repoWatchers, repoCreatedAt, isSelected, onClick}) {
    return (
        <S.UserRepoContainer isSelected={isSelected} onClick={onClick}>
            <S.UserImgAndName>
                <S.UserImg src={userImg}></S.UserImg>
                <S.UserName>{userName}</S.UserName>
            </S.UserImgAndName>
            <S.RepoName>{repoName}</S.RepoName>
            <S.RepoDescription>{repoDescription}</S.RepoDescription>
            <S.RepoStarsAndLanguageAndFork>
                <S.RepoStars>
                    <S.StarImg src={starImg}/> 
                    <S.StarCount>{repoStars}</S.StarCount>
                </S.RepoStars>
                <S.RepoLanguage>
                    <S.langaugeColor/>
                    <S.language>{repoLanguage}</S.language>
                </S.RepoLanguage>
                <S.RepoForks>
                    <S.ForkImg src={forkImg}/>
                    <S.ForksCount>{repoForks}</S.ForksCount>
                </S.RepoForks>
            </S.RepoStarsAndLanguageAndFork>
            <S.RepoOpenIssues>이슈  {repoOpenIssues}</S.RepoOpenIssues>
            <S.RepoWatchers>구독자  {repoWatchers}</S.RepoWatchers>
            <S.RepoCreatedAt>생성날짜  {repoCreatedAt}</S.RepoCreatedAt>

        </S.UserRepoContainer>
    )
}