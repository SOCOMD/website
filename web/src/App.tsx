import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styled,{keyframes} from 'styled-components';


const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

interface AppProps {
  Mobile: boolean
}
const App = styled.div<AppProps>`
  display: grid;
  text-align: center;
  min-height: 100vh;
  grid-template-areas: 
    ". header ." 
    ". content .";
  grid-template-rows: ${props => props.Mobile ? "5vh" : "10vh"} auto;
  grid-template-columns: ${props => props.Mobile ? "0px auto 0px" : "auto 1200px auto"}; 
`
const Header = styled.div`
  grid-area: header;
  background: red;

  p {
    animation: ${spin} infinite 2s linear;
  }
`

const Content = styled.div`
  grid-area: content;
  background: blue;
`
// const app = styled.var
function AppComponent() {
  const isMobile:boolean = useMediaQuery({ maxWidth: 1199 })
  return (
    <App Mobile={isMobile}>
      <Header>
        <p>
          header 
        </p>
      </Header>
      <Content>
       content 
      </Content>
    </App>
  );
}


export default AppComponent;
