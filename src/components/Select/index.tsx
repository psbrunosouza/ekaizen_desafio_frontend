import React, {SelectHTMLAttributes, useCallback, useEffect, useRef} from 'react';
import {Container} from './styles';
import {useField} from '@unform/core';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: string[];
  label: string;
}

const Select: React.FC<SelectProps> = ({name, options, label,...props}) => {
  
  const selectRef = useRef<HTMLSelectElement>(null);
  const {fieldName, defaultValue, error, registerField} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label>{label}</label>
      <select
        ref={selectRef}
        {...props}
      >

        <option value="">
        </option>
        {
          options.map((option) => (
            <option 
              key={option} 
              value={option}
              >
              {option}
            </option>
          ))
        }
      </select>
    </Container>
  )
};

export {Select}