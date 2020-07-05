import React from 'react';
import styled from "styled-components";
import {colors} from "../style/colors"


const Btn = styled.button`
  border: 1px solid ${colors.green_light};
  border-radius: 25px;
  background-color: ${colors.green_dark};
  color: ${colors.white};
  padding: 6px 18px;
  margin: 12px 0;
`;

export default function Button({content, fn}) {

  return (
  <>
  <Btn onClick={fn}> {content} </Btn>
  </>
  )
}
