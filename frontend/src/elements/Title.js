import React from 'react'
import styled from "styled-components"

const Heading = styled.h2`
  margin:0;
  padding: 0;
  font-size: 16px;
`;

const Subtitle = styled.p`
  margin:0;
  padding: 0;
  font-size: 10px;
`;

export default function Title( {title} ) {
  const getSubtitle = () => {
    if(!title) return null
    const regex = /(\(.*\))/
    const subtitle = title.match(regex)
    const heading = title.replace(regex, '')
    if(!subtitle) return <Heading>{heading}</Heading>
    return (
      <Heading>
        {heading}
        <Subtitle>{subtitle[0]}</Subtitle>
      </Heading>)
    
  }

  return (
    <>
      {getSubtitle()}
    </>
  )
}
