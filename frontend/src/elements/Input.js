import styled from "styled-components"
import React from 'react'

const Textfield = styled.input`
  border: none;
  width: 100%;
  z-index: 2;
  height: 24px;

`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 25px;
  padding: 6px 12px;
  margin: 12px;
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
