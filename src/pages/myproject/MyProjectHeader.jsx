import React from 'react';
import { HeaderContainer, UserInfo, UserName, Divider, UserEmail, ButtonContainer, LogOutButton, ManualButton } from './Styles/MyProjectsHeaderStyles';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';
import ManualForMyPage from '../../components/readmeComponents/Modals/ManualForMyPage';
import { useState } from 'react';
const MyProjectHeader = ({ userName, userEmail }) => {
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);

  const logout=()=>{
    const userInfo = sessionStorage.getItem('userInfo');
    if(userInfo!==null){
      sessionStorage.clear();
      //window href로 Hedear 강제 리렌더링
      //로그인 <-> 사용자 이미지 바꾸기 위함
      window.location.href='/';
    }
  };

  const handleButtonClick=()=>{
    setIsManualModalOpen(true);
  };

  const closeManualModal =()=>setIsManualModalOpen(false);

  return (
    <HeaderContainer>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <UserInfo>
        <UserName>{userName}</UserName>
        <Divider />
        <UserEmail>{userEmail}</UserEmail>
      </UserInfo>
      <ButtonContainer>
        <ManualButton onClick={()=>handleButtonClick()}>사용법 보기</ManualButton>
        <LogOutButton onClick={()=>logout()}>로그아웃</LogOutButton>
      </ButtonContainer>

      {isManualModalOpen && (
        <ManualForMyPage
          closeModal = {closeManualModal}
        />
      )}
    </HeaderContainer>
  );
};

export default MyProjectHeader;
