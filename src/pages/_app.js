import React from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/MainLayout';
import Meta from '../components/Meta';
import DefaultLayout from '../components/layouts/DefaultLayout';
import "./../styles/style.scss";

class MyApp extends App {

  render() {

    const { Component, pageProps, router } = this.props;
    const Layout = Component.Layout || DefaultLayout;
    return (
      <div>
        <MainLayout {...pageProps}>
        <Meta {...pageProps.data}></Meta>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </MainLayout>
      </div>
    );
  }
}

export default MyApp;