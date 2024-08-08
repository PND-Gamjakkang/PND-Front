import React, { useEffect, useState } from 'react';
import * as S from './RetroStyle.jsx';
import axios from 'axios';

// component
import SearchRepo from '../../components/retro/SearchRepo.jsx';
import RetroBackgroundImg from '../../assets/images/retro-background.png';
import MyCalender from '../../components/retro/MyCalender.jsx';
import Thumnail from '../../components/retro/Thumnail.jsx';
import LoginModal from '../../components/Login/LoginModal.jsx';
import UserRepo from '../../components/retro/UserRepo.jsx';
import SelectPart from '../../components/retro/SelectPart.jsx';

function Retro() {
    const [currentStep, setCurrentStep] = useState(1);
    const [user, setUser] = useState([]);
    const [startDate, setStartDate] = useState(); // 프로젝트 시작 날짜
    const [endDate, setEndDate] = useState(); // 프로젝트 끝난 날짜
    const [imgFile, setImgFile] = useState(null); // 썸네일 사진
    const [selectedPart, setSelectedPart] = useState(''); // 선택한 파트
    const [selectedRepoId, setSelectedRepoId] = useState(null);
    const [selectedRepoName, setSelectedRepoName] = useState(null);

    const [isClickCreateBtn, setClickCreateBtn] = useState(false); // 생성하기 버튼 눌렀는지 유무


    const handleNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prevStep => prevStep - 1);
        }
    }

    // 선택한 레포 
    const handleRepoChange = (id, title) => {
        setSelectedRepoId(id);
        setSelectedRepoName(title);
    }
    // 캘린더
    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    }
    // 썸네일
    const handleThumnailImgChange = (imageFile) => {
        setImgFile(imageFile);
    }
    // 파트
    const handleSelectPartChange = (part) => {
        setSelectedPart(part);
    }
    // 프로젝트 생성하기 버튼 이벤트
    const handleClickCreateBtn = (isClick) => {
        setClickCreateBtn(true);
    }
    // 데이터 값이 잘 들어왔는지 확인용
    useEffect(() => {
        console.log("생성하기 버튼 누름");
    }, [isClickCreateBtn]);

    useEffect(() => {
        console.log("date: " + startDate + "일 ~ " + endDate);
    }, [startDate, endDate]);

    useEffect(() => {
        console.log("썸네일 이미지" + imgFile);
    }, [imgFile]);

    // 선택된 레포 확인
    useEffect(() => {
        console.log("선택된 레포 아이디: " + selectedRepoId);

    }, [selectedRepoId])

    // 통신 - 로그인 사용자 확인
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios({
                method: "GET",
                url: `http://localhost:8080/api/pnd/user/profile`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            }).then((res) => {
                setUser(res.data.data);
                console.log(res);

            }).catch((err) => {
                console.log("error");
            })
        }
    }, []);


    // 통신 - 프로젝트 생성
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token && isClickCreateBtn) {
    //         const period = startDate && endDate ? `${startDate}~${endDate}` : null;

    //         const data = {
    //             title: selectedRepoName,
    //             repositoryId: selectedRepoId,
    //             period: period,
    //             image: imgFile ? imgFile : null,
    //             part: selectedPart,
    //         };
    //         axios.post(`http://localhost:8080/api/pnd/project`, data, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then((res) => {
    //             console.log(res);

    //         }).catch((err) => {
    //             console.log("error");
    //         })
    //     }
    // }, [isClickCreateBtn]);
    // authInstance가 이미 axios 인스턴스로 정의되어 있다고 가정
    const authInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
      // 필요에 따라 추가 헤더 설정
    },
  });
  
    const postProject = async (project) => {
        try {
        const res = await authInstance.post('/api/pnd/user/projects', project);
        return res.data;
        } catch (error) {
        console.error('Error: ', error.message);
        throw error;
        }
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          const project = {
            title: selectedRepoName,
            repositoryId: selectedRepoId,
            part: selectedPart,
          };
    
          authInstance({
            method: "POST",
            url: `/api/pnd/project`,
            headers: {
              'Authorization': `Bearer ${token}`
            },
            data: project
          }).then((res) => {
            setUser(res.data.data);
            console.log(res);
          }).catch((err) => {
            console.log("error", err);
          });
        }
      }, [isClickCreateBtn]);

 
    // 로그인 되어있지 않으면 로그인 화면을 보여준다
    if (!user) {
        return <LoginModal />;
    }

    return (
        <S.RetroLayout>
            <SearchRepo onNext={handleNextStep} onPrev={handlePrevStep} user={user} onSelectedRepo={handleRepoChange} />
            <S.RetroContainer>
                {/* 리포트 생성하기 버튼 누르기 전에는 초기 화면을 보여준다 */}
                {!isClickCreateBtn ? (
                    <>
                        <S.InitialView>
                            <S.InitialViewTitle>&lt;- 회고 리포트를 작성할 프로젝트를 선택해 주세요.</S.InitialViewTitle>

                            {currentStep >= 2 && (
                                <S.InitialView>
                                    {currentStep >= 2 && <MyCalender onNext={handleNextStep} onDateChange={handleDateChange} />}
                                    {currentStep >= 3 && <Thumnail onNext={handleNextStep} onThumnailImgChange={handleThumnailImgChange} />}
                                    {currentStep >= 4 && <SelectPart onSelectPartChange={handleSelectPartChange} onClickCreateBtn={handleClickCreateBtn} />}
                                </S.InitialView>
                            )}
                        </S.InitialView>
                    </>
                ) : (
                    <>
                    </>


                )}

                {/* 리포트 생성하기 버튼 누르면 초기화면이 사라지고 리포트 결과를 보여준다 */}
                {/* <S.ReportView>

                </S.ReportView> */}
            </S.RetroContainer>

        </S.RetroLayout>
    );
}

export default Retro;