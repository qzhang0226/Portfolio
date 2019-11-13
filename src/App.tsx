import React from 'react';
// import {ThemeProvider, createGlobalStyle} from 'styled-components';
import './App.css';

// const GlobalStyle = createGlobalStyle`
//   body{
//     background-color: ${(props: any) => props.theme.mode === "dark" ? "#111" : "#EEE"};
//     color: ${(props: any) => props.theme.mode === "dark" ? "#EEE" : "#111"}
//   }
// `

export default function App(props: any): JSX.Element {
  return (
    // <ThemeProvider theme={{ mode: "dark"}}>
      <>
        {/* <GlobalStyle /> */}
        {props.children}
      </>
    // </ThemeProvider>
  );
}