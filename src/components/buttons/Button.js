import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return <ButtonStyle>{props.btnText}</ButtonStyle>;
};

export default Button;

// const styles = {
//   btn: {
//     paddingTop: '.5rem',
//     backgroundColor: '#FFD744',
//     borderRadius: '1rem',
//     fontSize: '3rem',
//     cursor: 'pointer',
//   },
// };

const ButtonStyle = styled.button`
  font-size: 2rem;
  color: red;
  background: #ffd744ff;
  border-radius: 20%;
  margin-left: 1rem;
  &:hover {
    background: orange;
  }
`;
