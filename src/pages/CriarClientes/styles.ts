import styled, { css } from 'styled-components';

interface ContainerProps {
  on?: boolean;
}

const Container = styled.section<ContainerProps>`
  width: 80% - 64px;
  height: 660px;
  position: relative;

  margin: 32px 16px 0 80px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2); 
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {

    width: 90%;

    > div { 
      position: absolute;
      right: 0;
      bottom: 0;

      margin-bottom: 18px;
      margin-right: 18px;
    }
    .group {
      position: relative;
      width: 100%;
      border-collapse: collapse;
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
      }
    }
  }

  
`;

const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #D4D9DE;
  padding: 6px;
  margin-bottom: 42px;
`;

const Title = styled.h1`
  text-align: left;
  margin-left: 12px;
  font-weight: 600;
`;

export {Container, Header, Title}