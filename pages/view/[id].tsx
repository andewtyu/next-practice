import Axios from 'axios';
import { useRouter } from 'next/router'
import {CSSProperties, useEffect, useState} from "react";
import ItemInfo from "../../src/component/ItemInfo";
import {Loader} from "semantic-ui-react";
import Head from "next/head";

const Page = ({item, name}: {item:any, name:string}) => {
  /*const [item, setItem] = useState({});
  const router = useRouter();
  const {id} = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const [isLoading, setLoading] = useState(true);
  const paddingTop:CSSProperties = {
    paddingTop: 400
  }

  function getData() {
    Axios.get(API_URL)
    .then(res => {
      console.log(res.data);
      setItem(res.data);
      setLoading(false);
    })
  }

  useEffect(() => {
    if (id && Number(id) > 0) {
      getData();
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div style={paddingTop}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <ItemInfo item={item}/>
      )}
    </>
  )*/

  return (
      <>
        <Head>
          <title>{item.name}</title>
          <meta name="description" content={item.description} key="title" />
        </Head>
        {item && <ItemInfo item={item} />}
        {name} 환경
      </>
  )
};

export default Page;

export async function getServerSideProps(context: { params: { id: any; }; }) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    }
  }
}