import Head from "next/head";

export const Container = (props) => (
  <div>
    <Head>
      <title>Nutrina</title>
    </Head>
    <div>{props.children}</div>
  </div>
);
