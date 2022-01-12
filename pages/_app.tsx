import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import Top from "../src/component/Top";
import Footer from "../src/component/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="">
        <Top/>
        <Component {...pageProps} />
        <Footer/>
      </div>
  )
}

export default MyApp

/***
 * Page 전환시에 Layout을 유지할 수 있다.
 * Page 전환시에 상태값을 유지할 수 있다.
 * ComponentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜주는것이 가능하다.
 * Global CSS를 이곳에 선언할 수 있다.
 *
* **/