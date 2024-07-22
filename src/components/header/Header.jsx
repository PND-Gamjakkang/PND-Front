import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle.jsx';

function Header() {
    return (
        <S.HeaderLayout>
            <S.NavLinks>
                <Link to='/home'>
                    <div>Home</div>
                </Link>
                <Link to='/readme'>
                    <div>Create ReadMe File</div>
                </Link>
                <Link to='/retro'>
                    <div>Project Retrospect</div>
                </Link>
                <Link to='/myprojects'>
                    <div>My Projects</div>
                </Link>

            </S.NavLinks>
            
        </S.HeaderLayout>
    )
    
}

export default Header;