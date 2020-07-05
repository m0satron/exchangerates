import styled from "styled-components"
import React from 'react'
import { breakpoints } from "../style/breakpoints"
import { colors } from "../style/colors"

const Textfield = styled.input`
  border: none;
  width: 100%;
  z-index: 2;
  height: 24px;
  width: 100%;


`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.black};
  border-radius: 25px;
  padding: 6px 12px;
  margin: 12px;
  ${breakpoints.tablet} {
    width: 50%;
  }
`;

const Label = styled.label`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
`;

const iconStyle = { color: "gray", float: "top", zIndex: "-1" };

export default function Input({ placeholderText, inputType, Icon, fn }) {
  return (
    <Div>
      <Label htmlFor={inputType}>
        {placeholderText}
      </Label>
      <Textfield
        type={inputType}
        placeholder={placeholderText}
        onChange={(e) => fn(e.target.value)}
      />
      {Icon ? (<Icon style={iconStyle} onClick="submit"></Icon>) : ''}
    </Div>
  )
}
