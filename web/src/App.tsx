import React from 'react';
import logo from './logo.svg';
import CSS from 'csstype';
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const styles = {
    AppStyle: {
        textAlign: "center",
    } as CSS.Properties,

    AppLogoStyle: {
        height: "40vmin",
        pointerEvents: "none",
    } as CSS.Properties,

    AppHeaderStyle: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    } as CSS.Properties,

    appLinkStyle: {
        color: "#61dafb",
    } as CSS.Properties
}


function App() {
  let logoAnimation:any = {};
  if (useMediaQuery({query: '(prefers-reduced-motion: no-preference)'})) {
    logoAnimation = {rotate: 360};
  }
  return (
    <div className="App" style={styles.AppStyle}>
      <header className="App-header" style={styles.AppHeaderStyle}>
        <motion.div animate={logoAnimation} transition={{ duration: 20,loop: Infinity,ease:"linear"}}>
          <img src={logo} className="App-logo" alt="logo" style={styles.AppLogoStyle} />
        </motion.div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.appLinkStyle}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
