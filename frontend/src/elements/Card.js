import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import List from "./List";
import { breakpoints } from "../style/breakpoints"
import { colors } from "../style/colors"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 12px;
  margin: 12px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px ${colors.gray};
  background-color: ${props => props.theme.bg};
  ${breakpoints.tablet} {
 
      padding: 16px;
  }
`;
Wrapper.defaultProps = {
    theme: {
        bg: colors.blue_light
    }
}


export default function Card({ header, population, currencies }) {
    if (!population && !currencies) return (
        <Wrapper>
            <Header
                title={header.title || ''}
                Icon={header.icon || ''}
                fn={header.fn || ''}
            />
        </Wrapper>
    )
    return (
        <Wrapper>
            <Header
                title={header.title || ''}
                Icon={header.icon || ''}
                fn={header.fn || ''}
            />
            <List
                name="Population:"
                list={population}
            />
            <List
                name="Currencies:"
                list={currencies}
            />
        </Wrapper>
    )
}
