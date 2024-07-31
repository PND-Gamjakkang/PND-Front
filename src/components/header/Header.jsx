import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './HeaderStyle.jsx';

function Header() {
    const location = useLocation();
    return (
        <S.HeaderLayout>
            <S.NavLinks>
                <Link to='/'>
                    <S.NavLink className={location.pathname === '/' ? 'active' : ''}>
                        Home
                    </S.NavLink>
                </Link>
                <Link to='/readme'>
                    <S.NavLink className={location.pathname === '/readme' ? 'active' : ''}>
                        Create Readme File
                    </S.NavLink>
                </Link>
                <Link to='/retro'>
                    <S.NavLink className={location.pathname === '/retro' ? 'active' : ''}>
                        Project Retrospect
                    </S.NavLink>
                </Link>
                <Link to='/myprojects'>
                    <S.NavLink className={location.pathname === '/myprojects' ? 'active' : ''}>
                            My Projects
                    </S.NavLink>
                </Link>

            </S.NavLinks>
            
        </S.HeaderLayout>
    )
    
}

export default Header;