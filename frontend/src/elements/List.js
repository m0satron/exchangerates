import React from 'react'
import styled from "styled-components"
import Title from "./Title"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
`;

const Ul = styled.ul`
  list-style: none;
`;

export default function List({name, list}) {

  return (
    <Wrapper>
      <Title title={name}></Title>
      <Ul>
        { list }
      </Ul>
    </Wrapper>
  )
}
