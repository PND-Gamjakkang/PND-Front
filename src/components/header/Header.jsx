import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './HeaderStyle.jsx';
import logoSrc from '../../assets/images/header-logo.png';
function Header() {
    const location = useLocation();
    return (
        <S.HeaderLayout>
            <Link to='/'>
                <S.Logo src={logoSrc} alt='Logo' />
            </Link>
            <S.NavLinks>
                <Link to='/'>
                    <S.NavLink className={location.pathname === '/' ? 'active' : ''}>
                        Home
                    </S.NavLink>
                </Link>
                <Link to='/readme'>
                    <S.NavLink className={location.pathname === '/readme' ? 'active' : ''}>
                        README
                    </S.NavLink>
                </Link>
                <Link to='/retro'>
                    <S.NavLink className={location.pathname === '/retro' ? 'active' : ''}>
                        DIAGRAM
                    </S.NavLink>
                </Link>
                <Link to='/myprojects'>
                    <S.NavLink className={location.pathname === '/myprojects' ? 'active' : ''}>
                        GITHUB REPORT
                    </S.NavLink>
                </Link>
                <Link to='/myprojects'>
                    <S.NavLink className={location.pathname === '/myprojects' ? 'active' : ''}>
                        MY PROJECTS
                    </S.NavLink>
                </Link>
            </S.NavLinks>
            <S.Gap/>
                <Link to='/login'>
                <S.NavLink className={location.pathname ==='/login' ? 'active' :  ''}>
                로그인 | 회원가입
                </S.NavLink>
                </Link>
        </S.HeaderLayout>
    );
}

export default Header;
