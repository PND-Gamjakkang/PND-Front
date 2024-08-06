import React, { useEffect, useState } from 'react';
import * as S from './RetroStyle.jsx';

// component
import SearchRepo from '../../components/retro/SearchRepo.jsx';
import RetroBackgroundImg from '../../assets/images/retro-background.png';
import MyCalender from '../../components/retro/MyCalender.jsx';
import Thumnail from '../../components/retro/Thumnail.jsx';
import LoginModal from '../../components/Login/LoginModal.jsx';
import UserRepo from '../../components/retro/UserRepo.jsx';
import SelectPart from '../../components/retro/SelectPart.jsx';

function Retro() {
    return (
        <S.RetroLayout>
            <SearchRepo/>
            <S.RetroContainer>
                {/* 리포트 생성하기 버튼 누르기 전에는 초기 화면을 보여준다 */}
                <S.InitialView>
                    <S.InitialViewTitle>회고 리포트를 작성할 프로젝트를 선택해 주세요.</S.InitialViewTitle>
                    <MyCalender/>
                    <Thumnail/>
                    <SelectPart/>
                </S.InitialView>
                {/* 리포트 생성하기 버튼 누르면 초기화면이 사라지고 리포트 결과를 보여준다 */}
                {/* <S.ReportView>

                </S.ReportView> */}
            </S.RetroContainer>

        </S.RetroLayout>
    );
}

export default Retro;