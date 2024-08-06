import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as S from './MainStyle.jsx';

import LoginModal from '../../components/Login/LoginModal.jsx';
// images
import RedmeIcon from '../../assets/images/readme-icon.png';
import FolderIcon from '../../assets/images/folder-icon.png';
import RetroIcon  from '../../assets/images/retro-icon.png';
import MainImg from '../../assets/images/main-img.png';

function Main() {
    const navigate = useNavigate();
    const moveTo  = () => {
        navigate('/login');
    }
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code');
        if(code) { // 인가 코드를 받아온 경우에만 실행하도록 하기
            console.log("로그인 성공!");
            // axios({
            //     method: "GET",
            //     url: 'http://localhost:3000/api/auth/github/',
            // }).then((res) =>{
            //     console.log(res);
            // })
              
            // const fetchAccessToken = async () => {
            //     // 쿼리스트링에서 Authorization Code를 가져옵니다.
            //     const location = new URL(window.location.href);
            //     const code = location.searchParams.get("code");
            //     const ACCESS_TOKEN_URL = `${GITHUB_AUTH_TOKEN_SERVER}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRETS}&code=${code}`;
          
            //     return fetch(ACCESS_TOKEN_URL, {
            //       method: "POST",
            //       headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //       },
            //       body: JSON.stringify({ code })

            //     });
            //   };
            //   fetchAccessToken()
            //   .then((response) => response.json())
            //   .then((data) => localStorage.setItem('access_token', data.access_token))
            //   .catch((err) => console.log(err));

            // const fetchAccessToken = async () => {
            //     try {
            //         const response = await fetch('https://github.com/login/oauth/access_token', {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //                 Accept: 'application/json',
            //             },
            //             body: JSON.stringify({ code }),
            //         });
            //         const data = await response.json();
            //         localStorage.setItem('access_token', data.access_token);
            //     } catch (err) {
            //         console.log(err);
            //     }
            // };
            // fetchAccessToken();            
            
            
        }
    },[location])
    
    return (
        <S.MainLayout>
            <S.MainLeft>
                <S.MainTextTop>프로젝트가 끝난 이후, <br/>또 다른 시작</S.MainTextTop>
                <S.MainButton onClick={moveTo}>프로젝트 회고하러 가기</S.MainButton>
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