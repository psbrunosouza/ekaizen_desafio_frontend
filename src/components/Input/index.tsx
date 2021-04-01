import React, { useRef, useEffect , InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import {Container} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: string;
  name: string;
}

const Input: React.FC<InputProps> = ({type, name, value, ...props}) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input ref={inputRef} type={type} value={value}  {...props} />
    </Container>
  )
};

export {Input}