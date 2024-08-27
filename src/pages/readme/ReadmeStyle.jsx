import styled from "styled-components";
export const ReadmeContainer = styled.div`
  max-width: 78.13%; /* 1500px / 1920px * 100 */
  width: 78.13%; /* 1500px / 1920px * 100 */
  height: 87.96%; /* 950px / 1080px * 100 */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid #FFFFFF; /* 2px to rem for scalability */
  border-radius: 1.15rem; /* 22px to rem for scalability */
`;

export const Content = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border: 0.052rem solid #D9D9FF; /* 1px to rem for scalability */
  border-radius: 1.15rem; /* 22px to rem for scalability */
  box-sizing: border-box;
  width: 100%; /* Full width of the parent container */
`;

export const Container = styled.div`
  margin-top: 3.24%; /* 35px / 1080px * 100 */
  margin-bottom: 3.24%; /* 35px / 1080px * 100 */
  display: flex;
  margin-left: 1.82%; /* 35px / 1920px * 100 */
  flex-direction: column;
  flex: 1;
`;

export const Container2 = styled.div`
  margin-top: 3.24%; /* 35px / 1080px * 100 */
  margin-bottom: 3.24%; /* 35px / 1080px * 100 */
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1.82%; /* 35px / 1920px * 100 */
`;

export const Divider = styled.div`
  width: 1.46%; /* 28px / 1920px * 100 */
  background-color: #FFFFFF;
  flex-shrink: 0;
`;

export const MdAreaHeader = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 0;
  color: black; 
  line-height: 8.15%; /* 88px / 1080px * 100 */
`;
