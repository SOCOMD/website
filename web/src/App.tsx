import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled,{keyframes} from 'styled-components';

import Content from './Content';

interface AppProps {
  Mobile: boolean
}
const AppComponent = styled.div<AppProps>`
  display: grid;
  text-align: center;
  min-height: 100vh;
  grid-template-areas: 
    ". header ." 
    ". content .";
  grid-template-rows: ${props => props.Mobile ? "5vh" : "10vh"} auto;
  grid-template-columns: ${props => props.Mobile ? "0px auto 0px" : "auto 1200px auto"}; 
`
interface themeProps {
  DarkTheme: boolean
}
const Header = styled.div<themeProps>`
  grid-area: header;
  background: ${props => props.DarkTheme ? '#202020':'#C0C0C0'}; 
`

const ContentContainer = styled.div<themeProps>`
  grid-area: content;
  background: ${props => props.DarkTheme ? '#404040':'#E8E8E8'}; 
`
// const app = styled.var
function App() {
  const isMobile:boolean = useMediaQuery({ maxWidth: 1199 })
  const isDarkTheme:boolean = useMediaQuery({query: '(prefers-color-scheme: dark)'})
  return (
    <AppComponent Mobile={isMobile}>
      <Header DarkTheme={isDarkTheme}>
        <p>
          header 
        </p>
      </Header>
      <ContentContainer DarkTheme={isDarkTheme}>
        <Content Mobile={isMobile} DarkTheme={isDarkTheme}/> 
      </ContentContainer>
    </AppComponent>
  );
}

export default App;
