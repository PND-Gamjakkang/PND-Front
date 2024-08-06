import Calendar from "react-calendar";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import './styles/calendar-style.css';
import * as S from './styles/RetroStyle.jsx';

export default function MyCalender() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const changeDate = e => {
        // 프로젝트 시작 날짜와 끝난 날짜 선택한 event를 받아서 yyyy/mm/dd 형식으로 포맷팅을 한다
        const startDateFormat = moment(e[0]).format("YYYY/MM/DD");
        const endDateFormat = moment(e[1]).format("YYYY/MM/DD");
        // 값이 변할 때마다 다시 세팅해준다
        setStartDate(startDateFormat);
        setEndDate(endDateFormat);
    }
    return (
        <S.MyCalenderContainer>
            <S.OptionParagraph>기한입력</S.OptionParagraph>

            <Calendar
                onChange={changeDate}
                selectRange={true} // 날짜 범위를 지정하기 위한 값 ture로 지정해준다
                formatDay={(locale, date) => moment(date).format("DD")}
            />
        </S.MyCalenderContainer>
    )
}