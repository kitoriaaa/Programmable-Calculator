import React, { FC } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  title: string;
  header: string;
  children: React.ReactNode;
  image?: string | null;
}

export const Layout: FC<Props> = (props) => {
  return (
    <div className="bg-light" id="wrapper">
      <Head>
        <title>{props.header}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>
      <Header header={props.header} />
      <div className="container-fluid">
        <h4 className="my-3 text-primary text-center">
          {props.title}
        </h4>
        {props.children}
        <Footer footer="copyright @kitoriaaa" />
      </div>
    </div>
  );
};
