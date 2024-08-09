import styled from "styled-components";

export const RetroLayout = styled.div`
width: 100%;
display:flex;
gap: 7vw;
`;

export const RetroContainer = styled.div`
width: 50%;
border-left : 2px solid white;
border-right : 2px solid white;
padding: 2vw;
`;

// InitialView
export const InitialView = styled.div`
color: white;
font-family: Inter;
font-size: 16px;
font-style: italic;
font-weight: 600;
line-height: 175%; /* 28px */
`;

export const InitialViewTitle = styled.div`
display: inline-block;
border-bottom: 2px solid white;
`;

export const ReportContainer = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
`;


export const ReportView = styled.div`
width: 50%;
background-color: white;
font-family: Inter;
font-size: 16px;
font-style: italic;
font-weight: 600;
line-height: 175%; /* 28px */
color: black;
padding: 20px;
margin-top: 5%;
`;
