// src/components/MyProjects.js
import React from 'react';
import Stat from './Stat.jsx';
import Project from './Project.jsx';
import MyProjectHeader from './MyProjectHeader.jsx';
import logo from '../../assets/images/profile-logo.png'; 
import { MyProjectsLayout,Container1,StatContainer,ProfileContainer,ProfileImage } from './Styles/MyProjectsStyles.jsx';

function MyProjects() {
    return (
        <MyProjectsLayout>
            <MyProjectHeader />
            <Container1>
                <ProfileContainer>
                    <ProfileImage src={logo} />
                </ProfileContainer>
                <StatContainer>
                    <Stat />
                </StatContainer>
            </Container1>
            <Project />
        </MyProjectsLayout>
    );
}

export default MyProjects;
