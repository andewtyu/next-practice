import type { NextPage } from 'next'
import {Header} from "semantic-ui-react";
import Gnb from "./Gnb";

const Top: NextPage = () => {
  // @ts-ignore
  // @ts-ignore
  return (
      <div>
        <div style={{display: "flex"}>
          <img src="https://raw.githubusercontent.com/coding-angma/nextjs-tutorial/master/public/images/angma.png" alt="logo"/>
          <Header as="h1">Next Tutorial</Header>
          <Gnb/>
        </div>
      </div>
  )
}

export default Top;
