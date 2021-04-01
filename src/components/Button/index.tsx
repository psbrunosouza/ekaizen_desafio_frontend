import React, {ButtonHTMLAttributes} from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: number;
  height: number;
  styled?: boolean;
}


const Button: React.FC<ButtonProps> = ({
  width, 
  height, 
  type, 
  children, 
  styled,
  ...props}) => {
  return (
    <Container styled={styled} width={width} height={height}>
      <button type={type} {...props}>
        {children}
      </button>
    </Container>
  )
};

export {Button}