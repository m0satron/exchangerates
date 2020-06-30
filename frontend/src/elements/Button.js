import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
  border: 3px solid black;  
`;

export default function Button({content, fn}) {

  return (
  <>
  <Btn onClick={fn}> {content} </Btn>
  </>
  )
}
