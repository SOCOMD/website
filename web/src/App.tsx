import React from 'react';
import CSS from 'csstype';
// import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobile:boolean = useMediaQuery({ maxDeviceWidth: 1199 })
  var headerHeight:string = isMobile ? "5vh" : "10vh"
  var contentWidth:string = isMobile ? " 0px auto 0px" : "auto 1200px auto" 
  var styles = {
      App: {
          display: "grid",
          textAlign: "center",
          minHeight: "100vh",
          gridTemplateAreas: "'. header .' '. content .'",
          gridTemplateRows: `${headerHeight} auto` ,
          gridTemplateColumns: contentWidth ,
      } as CSS.Properties,
      Header: {
        display: "grid",
        gridArea: "header",
        background: "red",
      } as CSS.Properties,
      Content: {
        gridArea: "content",
        background: "blue",
      } as CSS.Properties,
  }

  return (
    <div className="App" style={styles.App}>
      <div style={styles.Header}>
        header 
      </div>
      <div style={styles.Content}>
       content 
      </div>
    </div>
  );
}


export default App;
