import React, { useEffect, useState } from 'react';
import * as S from './style';
import Modal from 'react-modal';
import { API } from '../../api/axios';
// 이미지
import MainLogoImg from '../../assets/images/main-logo.png';

export default function LoginModal({ onSuccess }) {
    // 임시
    const [isLogin, setIsLogin] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(true);

    const fetchUserData = async () => {
        try {
            const response = await API.get('api/pnd/user/profile');  
            const userInfo = {
                name: response.data.data.name,
                email: response.data.data.email,
                image: response.data.data.image,
                totalDocs : response.data.data.totalDocs,
                totalReadmes : response.data.data.totalReadmes,
                totalDiagrams : response.data.data.totalDiagrams,
                totalReports : response.data.data.totalReports
            };
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            const testInfo = sessionStorage.getItem('userInfo');
            const parsedUserInfo = JSON.parse(testInfo);
            console.log(typeof(parsedUserInfo.name));
        } catch (error) {
            console.error(error);
        }
    };
        // 깃허브 로그인
    const redirectUrl = 'http://localhost:3000'; // 깃허브 로그인 성공 시 다시 돌아갈 페이지 주소
    const githubUrl = 'https://github.com/login/oauth/authorize?client_id=Iv23ling8oOAYUIHUZ5x';
    
    const handleLogin = async () => {
        await fetchUserData();
        window.location.assign(githubUrl);

    };
            //     const getAccessToken = async (code) => {
    //         const client_id = 'YOUR_CLIENT_ID'; // 깃허브 OAuth 앱의 클라이언트 ID
    //         const client_secret = 'YOUR_CLIENT_SECRET'; // 깃허브 OAuth 앱의 클라이언트 시크릿
    //         const redirect_uri = 'YOUR_REDIRECT_URI'; // 리다이렉트 URI (선택사항)

    //         try {
    //             const response = await axios.post(
    //                 'https://github.com/login/oauth/access_token',
    //                 {
    //                     client_id,
    //                     client_secret,
    //                     code,
    //                     redirect_uri,
    //                 },
    //                 {
    //                     headers: {
    //                         accept: 'application/json',
    //                     },
    //                 }
    //             );

    //             const token = response.data.access_token;
    //             return token;
    //         } catch (error) {
    //             console.error('Error getting access token:', error);
    //             return null;
    //         }
    //     };
    //     // post
    //    const location = useLocation(); // 주소?

    //    useEffect(() => {
    //     if (!isLogin) {
    //         alert('로그인이 필요한 서비스입니다.');
    //         setShowLoginModal(true);
    //         console.log('로그인 알림창');
    //     }
    //     }, [isLogin]);

    // useEffect(() => {
    //     const urlParams = new URLSearchParams();
    //     const code = urlParams.get('code');
    //     console.log('urlParams : ' + urlParams);
    //     console.log('location: ' + location);
    //     console.log(code);

    //     if (code) {
    //         axios.post('/api/pnd/user/social/github', { code })
    //           .then(response => {
    //             setIsLogin(true);
    //             console.log('사용자 정보 확인, 로그인상태' + {isLogin}, response.data);
    //           })
    //           .catch(error => {
    //             console.error('사용자 정보를 불러들이지 못했습니다.', error);
    //           });
    //       }
    // },[location.search]);

    return (
        <Modal
            isOpen={modalOpen}
            //onRequestClose={handleCancleBtn}
            ariaHideApp={false}
            parentSelector={() => document.body}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "100%",
                    height: "100vh",
                    zIndex: "1000",
                    position: "fixed",
                    top: "0",
                    left: "0",
                },
                content: {
                    background: 'white',
                    border: '2px solid',
                    borderRadius: '22px',
                    padding: '10px',
                    zIndex: "1100",
                    position: "absolute",
                    width: '26vw', // 기본 너비 설정
                    height: '60vh', // 기본 높이 설정
                    maxWidth: '100%', // 최대 너비 제한
                    maxHeight: '100%', // 최대 높이 제한
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '20%',
                    left: '40%',
                    overflow: 'hidden', // 스크롤 제거

                },
            }}
        >
            <S.LoginContainer>
                <S.LoginModal>
                    <S.LogoImg src={MainLogoImg} />
                    <S.LoginMessage>로그인이 필요한 기능입니다.<br/>로그인 하시겠습니까?</S.LoginMessage>
                    <S.LoginButton
                        onClick={handleLogin}
                    ></S.LoginButton>
                    <S.LoginBottomText>깃허브로 로그인을 하고<br/>피엔디의 더 많은 서비스를 사용해보세요!</S.LoginBottomText>
                </S.LoginModal>
            </S.LoginContainer>
        </Modal>

    )
}