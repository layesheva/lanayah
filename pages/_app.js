import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Router from 'next/router';

import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

axios.defaults.baseURL = "https://www.ifoodapi.isoftsarl.com/api/v1/clients";
axios.defaults.headers.post["Content-Type"] = "application/json";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [loguer, setLoguer] = useState(false);

  useEffect(() => {
    setLoguer(localStorage.getItem("telephone") !== null);
  });

  return (
    <>
      <Head>
        <link rel="icon" href="logo.png" />
      </Head>
      <NavBar loguer={loguer} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
