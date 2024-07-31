import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './MainStyle.jsx';

// images
import RedmeIcon from '../../assets/images/readme-icon.png';
import FolderIcon from '../../assets/images/folder-icon.png';
import RetroIcon  from '../../assets/images/retro-icon.png';
import MainImg from '../../assets/images/main-img.png';

function Main() {
    return (
        <S.MainLayout>
            <S.MainLeft>
                <S.MainTextTop>프로젝트가 끝난 이후, <br/>또 다른 시작</S.MainTextTop>
                <S.MainButton>프로젝트 회고하러 가기</S.MainButton>
                <S.MainTextBottom>
                    <S.HighlightedText>Project end. Project and,</S.HighlightedText>
                    펜드(P-ND)는 맞춤형 AI로 당신이 프로젝트에서 놓친 부분을 정리해줘요.<br/>
                    개발자로서, 오직 프로젝트에만 집중하세요!
                </S.MainTextBottom>
                <S.MainFeatures>
                    <S.FeatureBox>
                        <S.FeatureImg src={RedmeIcon}/>
                        <S.FeatureText>맞춤형 ReadMe.md <br/> 파일 제작</S.FeatureText>
                    </S.FeatureBox>
                    <S.FeatureBox>
                        <S.FeatureImg src={RetroIcon}/>
                        <S.FeatureText>AI 프로젝트 회고하기 <br/> 파일 제작</S.FeatureText>
                    </S.FeatureBox>
                    <S.FeatureBox>
                        <S.FeatureImg src={FolderIcon}/>
                        <S.FeatureText>내 프로젝트 관리하기 <br/> 파일 제작</S.FeatureText>
                    </S.FeatureBox>
                </S.MainFeatures>
                <Link to='/team'>
                    <S.LinkToTeamPage>about our team ⓒ 감자깡</S.LinkToTeamPage>
                </Link>
            </S.MainLeft>
            <S.MainRight>
                <S.MainRightImg src={MainImg}/>
            </S.MainRight>
        </S.MainLayout>
    )

}

export default Main;