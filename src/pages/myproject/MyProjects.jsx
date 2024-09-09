import React, { useState, useEffect } from 'react';
import Stat from './Stat.jsx';
import Project from './Project.jsx';
import MyProjectHeader from './MyProjectHeader.jsx';
import logo from '../../assets/images/profile-logo.png'; 
import { MyProjectsLayout, Container1, StatContainer, ProfileContainer, ProfileImage } from './Styles/MyProjectsStyles.jsx';

function MyProjects() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userImage, setUserImage] = useState(logo); //기본이미지 - 서버에 image URL 없는 경우
    const [userTotalDocs, setUserTotalDocs] = useState(0);
    const [userTotalReadmes, setUserTotalReadmes] = useState(0);
    const [userTotalDiagrams, setUserTotalDiagrams] = useState(0);
    const [userTotalReports, setUserTotalReports] = useState(0);
    // sessionStorage에서 데이터를 가져오는 함수
    const fetchUserData =async () => {
        try {
            const userInfo = sessionStorage.getItem('userInfo');
            console.log(typeof userInfo); 
            if (userInfo) {
                const parsedUserInfo = JSON.parse(userInfo);
                console.log('parsing result : ' ,parsedUserInfo);
                setUserName(parsedUserInfo.name || '');
                setUserEmail(parsedUserInfo.email || '');
                setUserImage(parsedUserInfo.image || logo);
                setUserTotalDocs(parsedUserInfo.totalDocs || 0);
                setUserTotalReadmes(parsedUserInfo.totalReadmes || 0);
                setUserTotalDiagrams(parsedUserInfo.totalDiagrams || 0);
                setUserTotalReports(parsedUserInfo.totalReports || 0);
                // console.log('type :',typeof(parsedUserInfo.totalDocs));
            } else {
                console.log('No userInfo');
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
       fetchUserData();
      }, []);
    

    return (
        <MyProjectsLayout>
            <MyProjectHeader
            userName={userName}
            userEmail={userEmail}
            />
            <Container1>
                <ProfileContainer>
                    <ProfileImage src={userImage}/> 
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
        </MyProjectsLayout>
    );
}

export default MyProjects;
