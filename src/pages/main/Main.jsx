import React, { useEffect, useRef, useState } from 'react';
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
import MainLogoimg from '../../assets/images/main-logo-white.png';
import MainDecoIcon1 from '../../assets/images/main-deco-icon1.png';
import MainDecoIcon2 from '../../assets/images/main-deco-icon2.png';

function Main() {
    const outerDivRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 현재 스크롤 위치
            const pageHeight = window.innerHeight; // 화면 세로길이 = 100vh
            const DIVIDER_HEIGHT = 5;
            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 현재 1페이지
                    console.log("현재 1페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 현재 2페이지
                    console.log("현재 2페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(3);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 현재 1페이지
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 현재 2페이지
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    setCurrentPage(1);
                } else {
                    // 현재 3페이지
                    console.log("현재 3페이지, up");
                    outerDivRef.current.scrollTo({
                      top: pageHeight + DIVIDER_HEIGHT,
                      left: 0,
                      behavior: "smooth",
                    });
                    setCurrentPage(2);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
          outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);

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
        <S.MainLayout ref={outerDivRef}>
            <S.MainFirstPage>
                <S.MainHeaderText>
                    프로젝트 문서화의 모든 것 <br/>
                    <S.MainLogoImg src={MainLogoimg}/>에서 쉽고 간편하게
                </S.MainHeaderText>
                <S.MainSubHeaderText>지금 바로 깃허브로 로그인하고 시작해보세요</S.MainSubHeaderText>
                <S.MainDecoIconImg1 src={MainDecoIcon1}/>
                <S.MainDecoIconImg2 src={MainDecoIcon2}/>
                <S.MainLoginButton onClick={moveTo}>깃허브 로그인</S.MainLoginButton>
            </S.MainFirstPage>
            <S.Divider></S.Divider>
            <S.MainSecondPage>

            </S.MainSecondPage>
            <S.Divider></S.Divider>
            <S.MainThirdPage>
                
            </S.MainThirdPage>
                {/* <S.MainButton onClick={moveTo}>프로젝트 다이어그램 생성하러 가기</S.MainButton>
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
 */}
        </S.MainLayout>
    )

}

export default Main;