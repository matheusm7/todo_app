import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
   }

`;

export const Container = styled.div`
  width: 100%;
  min-height: 895px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px 25px;

  .title{
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #da2535;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 24xpx;
  color: #da2535;

  &::placeholder {
  font-weight: 700;
  font-size: 16px;
  line-height: 24xpx;
  color: #da2535;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content:  ${(props) => props.justify || 'center'};
  align-items:  ${(props) => props.align || 'center'};
  gap: ${(props) => props.gap || "16px"}
`

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"}; 
`

export const Button = styled.button`  
  width: 112px;
  height: 50px;
  background: #da2535;
  border-radius: 10px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FBFBFB;
`;

export const Item = styled.li``;