import React, { useState } from 'react';
import Modal from 'react-modal';
import Calendar from "react-calendar";
import moment from 'moment';
import './styles/calendar-style.css';
import styled from 'styled-components';
import { API } from '../../api/axios';
import * as S from './styles/SelectedRepoModalStyle';

const ModalContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 16px;
`;

const DateContainer = styled.div`
  margin-bottom: 20px;
`;

const DateSelector = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  color: #888;
`;

const SaveButton = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  background: #6C63FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

function RepoSettingModalForEdit({ repoId,isOpen, closeModal, initialTitle, initialStartDate, initialEndDate, onSave, projectId }) {
  const [title, setTitle] = useState(initialTitle || '');
  const [startDate, setStartDate] = useState(initialStartDate || null);
  const [endDate, setEndDate] = useState(initialEndDate || null);
  const [isClickSettingDate, setIsClickSettingDate] = useState(false);

  const handleSave = async () => {
    try {
      const formData = new FormData();
  
      const jsonData = {
        title: title,
        period: `${moment(startDate).format('YYYY.MM.DD')} ~ ${moment(endDate).format('YYYY.MM.DD')}`
      };
  
      const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      formData.append('data', jsonBlob); 
      formData.append('image',null);
      const response = await API.put(`api/pnd/repo/${repoId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      console.log('response:', response);
  
      onSave({ title, startDate, endDate });
  
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setIsClickSettingDate(false); // 날짜 선택 후 달력 닫기
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          background: 'white',
          border: '2px solid',
          borderRadius: '12px',
          padding: '20px',
          width: '400px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxSizing: 'border-box',
        },
      }}
    >
      <ModalContainer>
        <Title>레포지토리 기본정보</Title>

        {/* 제목 설정 */}
        <Label>제목 설정</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* 기간 설정 */}
        <S.SettingTitleText>기간 설정</S.SettingTitleText>
        <S.InputDate>
          {isClickSettingDate ? (
            <Calendar
              onChange={handleDateChange}
              selectRange={true}
              value={startDate && endDate ? [startDate, endDate] : null}
              formatDay={(locale, date) => moment(date).format("DD")}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          ) : (
            <DateSelector onClick={() => setIsClickSettingDate(true)}>
              {startDate && endDate
                ? `${moment(startDate).format('YYYY/MM/DD')} - ${moment(endDate).format('YYYY/MM/DD')}`
                : '날짜를 선택하세요'}
            </DateSelector>
          )}
        </S.InputDate>

        {/* 저장 버튼 */}
        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </ModalContainer>
    </Modal>
  );
}

export default RepoSettingModalForEdit;
