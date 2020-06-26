import React from 'react'
import styled from "styled-components"
import Title from "./Title"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const iconStyle = {
  alignSelf: "flex-start", 
}

export default function Header({title, Icon, fn=()=>{}}) {
  return (
    <Wrapper>
      <Title title={title} />
      { Icon ? (<Icon style={iconStyle} onClick={fn} />)  : '' } 
    </Wrapper>
  )
}
