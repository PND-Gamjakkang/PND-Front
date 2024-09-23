import React, { useState, useEffect } from 'react';
import Stat from './Stat.jsx';
import Project from './Project.jsx';
import MyProjectHeader from './MyProjectHeader.jsx';
import logo from '../../assets/images/profile-logo.png';
import { MyProjectsLayout, Container1, StatContainer, ProfileContainer, ProfileImage } from './Styles/MyProjectsStyles.jsx';
import LoginModal from '../../components/Login/LoginModal.jsx';
import { API } from '../../api/axios.js';

function MyProjects() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userImage, setUserImage] = useState(logo); //기본이미지 - 서버에 image URL 없는 경우
    const [userTotalDocs, setUserTotalDocs] = useState(0);
    const [userTotalReadmes, setUserTotalReadmes] = useState(0);
    const [userTotalDiagrams, setUserTotalDiagrams] = useState(0);
    const [userTotalReports, setUserTotalReports] = useState(0);
    const [needLogin, setNeedLogin] = useState(false);

    // sessionStorage에서 데이터를 가져오는 함수
    // const fetchUserData =async () => {
    //     try {
    //         const userInfo = sessionStorage.getItem('userInfo');
    //         console.log(typeof userInfo); 
    //         if (userInfo) {
    //             const parsedUserInfo = JSON.parse(userInfo);
    //             console.log('parsing result : ' ,parsedUserInfo);
    //             setUserName(parsedUserInfo.name || '');
    //             setUserEmail(parsedUserInfo.email || '');
    //             setUserImage(parsedUserInfo.image || logo);
    //             setUserTotalDocs(parsedUserInfo.totalDocs || 0);
    //             setUserTotalReadmes(parsedUserInfo.totalReadmes || 0);
    //             setUserTotalDiagrams(parsedUserInfo.totalDiagrams || 0);
    //             setUserTotalReports(parsedUserInfo.totalReports || 0);
    //             // console.log('type :',typeof(parsedUserInfo.totalDocs));
    //         } else {
    //             console.log('No userInfo');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const fetchUserData = async () => {
        // 세션에서 토큰 가져오기
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error("No token found in session storage");
        }
        if (token) {
            try {
                const response = await API.get(`api/pnd/user/profile`);
                const userInfo = {
                    name: response.data.data.name,
                    email: response.data.data.email,
                    image: response.data.data.image,
                    totalDocs: response.data.data.totalDocs,
                    totalReadmes: response.data.data.totalReadmes,
                    totalDiagrams: response.data.data.totalDiagrams,
                    totalReports: response.data.data.totalReports
                };
                sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                const testInfo = sessionStorage.getItem('userInfo');
                if (testInfo) {
                    const parsedUserInfo = JSON.parse(testInfo);
                    console.log('parsing result : ', parsedUserInfo);
                    setUserName(parsedUserInfo.name || '');
                    setUserEmail(parsedUserInfo.email || '');
                    setUserImage(parsedUserInfo.image || logo);
                    setUserTotalDocs(parsedUserInfo.totalDocs || 0);
                    setUserTotalReadmes(parsedUserInfo.totalReadmes || 0);
                    setUserTotalDiagrams(parsedUserInfo.totalDiagrams || 0);
                    setUserTotalReports(parsedUserInfo.totalReports || 0);
                    // console.log('type :',typeof(parsedUserInfo.totalDocs));
                }

            } catch (error) {
                console.error(error);
            }
        }
    };


    useEffect(() => {
        //MyPage가 다시 로드되면 세션 만료시키기
        sessionStorage.setItem('repoId', null);
        const userInfo = sessionStorage.getItem('userInfo');
        if (userInfo !== null) {
            sessionStorage.getItem('userInfo', null); // 초기화
            fetchUserData();
        }
        else {
            setNeedLogin(true);
        }
    }, []);


    return (
        <MyProjectsLayout>
            <MyProjectHeader
                userName={userName}
                userEmail={userEmail}
            />
            <Container1>
                <ProfileContainer>
                    <ProfileImage src={userImage} />
                </ProfileContainer>
                <StatContainer>
                    <Stat
                        userTotalDocs={userTotalDocs}
                        userTotalReadmes={userTotalReadmes}
                        userTotalDiagrams={userTotalDiagrams}
                        userTotalReports={userTotalReports}
                    />
                </StatContainer>
            </Container1>
            <Project />
            {needLogin && (
                <LoginModal></LoginModal>
            )}
        </MyProjectsLayout>
    );
}

export default MyProjects;