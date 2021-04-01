import styled, {css} from 'styled-components';

interface ButtonProps {
  width: number;
  height: number;
  styled?: boolean;
}

//36

const Container = styled.div<ButtonProps>`
  padding: ${(props) => props.height}px ${(props) => props.width}px;
  border-radius: 5px;
  background: #145999;

  ${(props) => 
    (props.styled === false && css`
      background: transparent;
      padding: 0;
      border-radius: 0;
    `
  )}

  button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: #fff;
  }
`;

export {Container}