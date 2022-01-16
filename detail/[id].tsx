import {GetStaticPaths} from "next";
import Axios, {AxiosResponse} from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import ItemInfo from "../src/component/ItemInfo";

const Post = ({ item, name }: {item:any, name:string}) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
        <div style={{ padding: "100px 0" }}>
          <Loader active inline="centered">
            Loading
          </Loader>
        </div>
    );
  }

  return (
      <>
        {item && (
            <>
              <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description}></meta>
              </Head>
              {name} 환경 입니다.
              <ItemInfo item={item} />
            </>
        )}
      </>
  );
};

export default Post;

export const getStaticPaths:GetStaticPaths = async () => {
  const apiUrl = process.env.apiUrl;
  let res: AxiosResponse<any>;
  // @ts-ignore
  res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    // { params: { id: "740 } },
    // { params: { id: "730 } },
    // { params: { id: "729 } },
    // ]
    paths: data.slice(0, 9).map((item: { id: { toString: () => any; }; }) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: { params: { id: any } }) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}