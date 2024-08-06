import React, { useEffect, useState } from 'react';
import * as S from './RetroStyle.jsx';

// component
import SearchRepo from '../../components/retro/SearchRepo.jsx';
import RetroBackgroundImg from '../../assets/images/retro-background.png';
import MyCalender from '../../components/retro/MyCalender.jsx';
import Thumnail from '../../components/retro/Thumnail.jsx';
import LoginModal from '../../components/Login/LoginModal.jsx';

function Retro() {
    // // 임시
    // const [isLogin, setIsLogin] = useState(false);
    // const [showLoginModal, setShowLoginModal] = useState(false);


    // useEffect(() => {
    //     const showAlert = () => {
    //         alert('로그인이 필요한 서비스입니다.');
    //         setShowLoginModal(true);
    //         console.log("로그인 팝업2")

    //     };
    //     showAlert();
    //     console.log("로그인 팝업1")
    // }, []);

    return (
        <S.RetroLayout>
            {/* {isLogin ? (
                <></>
            ) : (
                <>
                {showLoginModal && <LoginModal />}
                </>
            )} */}

            <SearchRepo/>
            <S.RetroContainer>
                {/* 리포트 생성하기 버튼 누르기 전에는 초기 화면을 보여준다 */}
                <S.InitialView>
                    <S.InitialViewTitle>회고 리포트를 작성할 프로젝트를 선택해 주세요.</S.InitialViewTitle>
                    <S.OptionParagraph>기한입력</S.OptionParagraph>
                    <MyCalender/>
                    <S.OptionParagraph>썸네일 설정</S.OptionParagraph>
                    <Thumnail/>
                    <S.OptionParagraph>파트 선택</S.OptionParagraph>
                </S.InitialView>
                {/* 리포트 생성하기 버튼 누르면 초기화면이 사라지고 리포트 결과를 보여준다 */}
                {/* <S.ReportView>

                </S.ReportView> */}
            </S.RetroContainer>

        </S.RetroLayout>


        
    );
}

export default Retro;