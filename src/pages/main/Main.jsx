import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as S from './MainStyle.jsx';
import axios from 'axios';

import LoginModal from '../../components/Login/LoginModal.jsx';
// images
import RedmeIcon from '../../assets/images/readme-icon.png';
import FolderIcon from '../../assets/images/folder-icon.png';
import RetroIcon  from '../../assets/images/retro-logo.png';
import MainImg from '../../assets/images/main-img.png';
import MainLogoimg from '../../assets/images/main-logo.png';

function Main() {
    const navigate = useNavigate();
    const moveTo  = () => {
        if(localStorage.getItem("token")) {
            navigate('/retro');
        } else {
            navigate('/login');
        }
    }
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');
        if(code) { // 인가 코드를 받아온 경우에만 실행하도록 하기
            axios({
                method: "POST",
                url: `http://localhost:8080/api/pnd/oauth/social/github?code=${code}`
            }).then((res) =>{
                console.log(res);
                const ACCESS_TOKEN = res.data.data.token;
                localStorage.setItem("token", ACCESS_TOKEN);
            }).catch((err) => {
                console.log("error");
            })
        }
    },[location])
    
    return (
        <S.MainLayout>
            <S.MainLeft>
                <S.MainLogoImg src={MainLogoimg}/>
                {/* <S.MainTextTop>P-ND(펜드)<br/></S.MainTextTop> */}
                <S.MainTextBottom>
                    <S.HighlightedText>Project and Diagram & (Markdown)Dashboard</S.HighlightedText>
                    펜드(P-ND)는 맞춤형 AI로 당신이 프로젝트에서 놓친 부분을 정리해줘요.<br/>
                    개발자로서, 오직 프로젝트에만 집중하세요!
                </S.MainTextBottom>
                <S.MainButton onClick={moveTo}>프로젝트 다이어그램 생성하러 가기</S.MainButton>
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