import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 통신을 위함
import { useLocation } from 'react-router-dom';
import * as S from './style';


export default function LoginModal() {
    // 임시
    const [isLogin, setIsLogin] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);


    // 깃허브 로그인
    const redirectUrl = 'http://localhost:3000'; // 깃허브 로그인 성공 시 다시 돌아갈 페이지 주소
    const githubUrl = 'https://github.com/login/oauth/authorize?client_id=Iv23ling8oOAYUIHUZ5x';
    const handleLogin = () => {
        window.location.href = githubUrl;
    }

    // post
   const location = useLocation(); // 주소?

   useEffect(() => {
    if (!isLogin) {
        alert('로그인이 필요한 서비스입니다.');
        setShowLoginModal(true);
        console.log('로그인 알림창');
    }
    }, [isLogin]);

    useEffect(() => {
        const urlParams = new URLSearchParams();
        const code = urlParams.get('code');
        console.log('urlParams : ' + urlParams);
        console.log('location: ' + location);
        console.log(code);
    
        if (code) {
            axios.post('/api/pnd/user/social/github', { code })
              .then(response => {
                setIsLogin(true);
                console.log('사용자 정보 확인, 로그인상태' + {isLogin}, response.data);
              })
              .catch(error => {
                console.error('사용자 정보를 불러들이지 못했습니다.', error);
              });
          }
    },[location.search]);

    return (
        <S.LoginContainer>
            {isLogin ? (
                <div></div>
            ) : (
                <>
                {showLoginModal && 
                        <S.LoginBackground>
                            <S.LoginModal>
                                <S.LogoImg src='/images/pnd-logo.png' />
                                <S.LoginButton onClick={handleLogin}></S.LoginButton>
                            </S.LoginModal>
                        </S.LoginBackground>

                }
                </>
            )}
        </S.LoginContainer>
    )
}