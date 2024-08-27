import * as S from './styles/RetroStyle.jsx';

import starImg from '../../assets/images/star.png';
import forkImg from '../../assets/images/fork-img.png';

import openIssueImage from '../../assets/images/oppenIssue.png';
import watcherImg from '../../assets/images/watcher-img.png';

export default function UserRepo({key, repoId, repoName, userName, userImg, repoDescription, repoStars, repoLanguage, repoForks, repoOpenIssues, repoWatchers, repoCreatedAt, isSelected, onClick}) {
    return (
        <S.UserRepoContainer isSelected={isSelected} onClick={onClick}>
            <S.UserImgAndName>
                <S.UserImg src={userImg}></S.UserImg>
                <S.UserName>{userName}</S.UserName>
            </S.UserImgAndName>
            <S.RepoName>{repoName}</S.RepoName>
            <S.RepoDescription>{repoDescription}</S.RepoDescription>
            <S.RepoDetails>
                <S.RepoInfos>
                    <S.StarImg src={starImg}/> 
                    <S.StarCount>{repoStars}</S.StarCount>
                </S.RepoInfos>
                <S.RepoInfos>
                    <S.langaugeColor/>
                    <S.language>{repoLanguage}</S.language>
                </S.RepoInfos>
                <S.RepoInfos>
                    <S.ForkImg src={forkImg}/>
                    <S.ForksCount>{repoForks}</S.ForksCount>
                </S.RepoInfos>
                <S.RepoInfos>
                    <S.OpenIssueImage src={openIssueImage}/>
                    <S.RepoOpenIssues>{repoOpenIssues}</S.RepoOpenIssues>
                </S.RepoInfos>
                <S.RepoInfos>
                    <S.WatcherImage src={watcherImg}/>
                    <S.RepoWatchers>{repoWatchers}</S.RepoWatchers>
                </S.RepoInfos>
                <S.RepoInfos>
                    <S.RepoCreatedAt>{repoCreatedAt}</S.RepoCreatedAt>
                </S.RepoInfos>
            </S.RepoDetails>
        </S.UserRepoContainer>
    )
}