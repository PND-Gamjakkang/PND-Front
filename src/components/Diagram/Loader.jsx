import { useState, useEffect } from 'react';
import './LoaderStyle.css'
import { useLocation } from 'react-router-dom';

function Loader() {
    const [text, setText] = useState('');
    const location = useLocation();

    // 상태 업데이트를 useEffect 내부로 이동하여 무한 렌더링 방지
    useEffect(() => {
        if (location.pathname === '/report') {
            setText("레포트 생성 중입니다 ...");
        } else {
            setText("AI 자동생성 중입니다 ...");
        }
    }, [location.pathname]); // location.pathname이 변경될 때만 상태 업데이트

    return (
        <div class="loader-layout">
            <div class="macbook">
                <div class="inner">
                    <div class="screen">
                        <div class="face-one">
                            <div class="camera"></div>
                            <div class="display">
                                <div class="shade"></div>
                            </div>
                            <span>MacBook Air</span>
                        </div>
                        <title>Layer 1</title>
                    </div>
                    <div class="macbody">
                        <div class="face-one">
                            <div class="touchpad">
                            </div>
                            <div class="keyboard">
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key space"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                                <div class="key f"></div>
                            </div>
                        </div>
                        <div class="pad one"></div>
                        <div class="pad two"></div>
                        <div class="pad three"></div>
                        <div class="pad four"></div>
                    </div>
                </div>
                <div class="shadow"></div>
            </div>
            <div class="loading-text">{text}</div>
        </div>
    )
}

export default Loader;