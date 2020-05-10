import React from 'react';
import styled from 'styled-components';

export interface HeaderProps {
  DarkTheme: boolean
}

const MainTheme = styled.div<HeaderProps>`
  grid-area: header;
  background: ${props => props.DarkTheme ? '#202020':'#C0C0C0'}; 
  display: grid;
  grid-template-areas: "logo pages discord";
  grid-template-columns: "100px auto 100px";
  align-items: center;
`
const Logo = styled.img` 
  grid-area: logo;
`
const Pages = styled.div`
  grid-area: pages;
`
const Discord = styled.div` 
  grid-area: discord;
`
function Header(props: HeaderProps) {
  return(
        <MainTheme DarkTheme={props.DarkTheme}>
          <Logo src="socomd.png"/>
          <Pages>
          </Pages>
          <Discord>
            <p> 
             discord 
            </p>
          </Discord>
        </MainTheme>
  )
}

export default Header;
