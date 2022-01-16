import type {GetStaticProps, NextPage} from "next";
import Axios, {AxiosResponse} from "axios";
import {CSSProperties, useEffect, useState} from "react";
import ItemList from "../src/component/ItemList";
import {Divider, Header, Loader} from "semantic-ui-react";

const Home = ({list}: {list:any}) => {
  const marginCss:CSSProperties = {
    marginTop: "20px"
  }

  const paddingTop:CSSProperties = {
    paddingTop: "200px"
  }

  /*const [list, setList] = useState([]);
  //const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [isLoading, setLoading] = useState(true);

  function getData() {
    // @ts-ignore
    axios.get(API_URL)
    .then((res:AxiosResponse<any>) => {
      console.log(res);
      setList(res.data);
      setLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, []);*/

  /*return (
    <div>
      {isLoading && (
          <div style={paddingTop}>
            <Loader inline="centered" active>
              Loading
            </Loader>
          </div>
      )}

      {!isLoading && (
          <>
            <Header as="h3" style={marginCss}>
              Best Product
            </Header>
            <Divider/>
            <ItemList list={list.slice(0, 10)} />

            <Header as="h3" style={marginCss}>
            New Product
            </Header>
            <Divider/>
            <ItemList list={list.slice(10)} />
          </>
      )}
    </div>
  )*/

  return (
    <>
      <Header as="h3" style={marginCss}>
        Best Product
      </Header>
      <Divider/>
      <ItemList list={list.slice(0, 10)} />

      <Header as="h3" style={marginCss}>
        New Product
      </Header>
      <Divider/>
      <ItemList list={list.slice(10)} />
    </>
  )
}

export default Home;

export const getStaticProps:GetStaticProps = async () => {
  const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data
    }
  }
}
