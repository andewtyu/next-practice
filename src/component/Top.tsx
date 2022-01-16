import {CSSProperties} from "react";
import { Header } from 'semantic-ui-react';
import Gnb from "./Gnb";

const Top = () => {

  const flexCss:CSSProperties = {
    display: "flex",
    paddingTop: "20px"
  }

  const flexSize:CSSProperties = {
    flex: "1000px 0 0",
  }

  const imageCss:CSSProperties = {
    display: "block",
    width: "80px"
  }

  return (
      <div style={flexCss}>
        <div style={flexSize}>
          <img
              src="https://raw.githubusercontent.com/coding-angma/nextjs-tutorial/master/public/images/angma.png"
              alt="logo"
              style={imageCss}
          />
          <Header as="h1">Next Tutorial</Header>
          <Gnb />
        </div>
      </div>
  );
}

export default Top;
