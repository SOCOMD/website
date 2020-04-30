import React from 'react';
import logo from './logo.svg';
import './App.css';
import CSS from 'csstype';

const AppStyle: CSS.Properties = {
    textAlign: "center",
}
const AppLogoStyle: CSS.Properties = {
    height: "40vmin",
    pointerEvents: "none",
}
const AppHeaderStyle: CSS.Properties = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
}

const appLinkStyle: CSS.Properties = {
    color: "#61dafb",
}

function App() {
  return (
    <div className="App" style={AppStyle}>
      <header className="App-header" style={AppHeaderStyle}>
        <img src={logo} className="App-logo" alt="logo" style={AppLogoStyle} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={appLinkStyle}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
