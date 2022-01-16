import React from 'react';
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import Top from "../src/component/Top";
import Footer from "../src/component/Footer";
import {CSSProperties} from "react";

function MyApp({ Component, pageProps }: AppProps) {

  const divSet:CSSProperties = {
    width: "1000px",
    margin: "0 auto"
  }

  return (
      <div style={divSet}>
        <Top/>
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
        <Footer/>
      </div>
  )
}

export default MyApp