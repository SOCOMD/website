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
function AppComponent() {
  const isMobile:boolean = useMediaQuery({ maxWidth: 1199 })
  var headerHeight:string = isMobile ? "5vh" : "10vh"
  var contentWidth:string = isMobile ? "0px auto 0px" : "auto 1200px auto" 
  const App = styled.div`
    display: grid;
    text-align: center;
    min-height: 100vh;
    grid-template-areas: 
      ". header ." 
      ". content .";
    grid-template-rows: ${headerHeight} auto;
    grid-template-columns: ${contentWidth}; 
    
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


  return (
    <App>
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
