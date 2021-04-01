import styled from 'styled-components';

const Container = styled.div`
  
  background: #fff;
  border-radius: 5px;
  border: 1px solid gray;
  width: 280px;
  padding: 3px 12px 3px 12px;
  position: relative;

  label {
    position: absolute;
    margin-top: -24px;
    margin-left: -12px;
  }

  select {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
  }
`;

export { Container }