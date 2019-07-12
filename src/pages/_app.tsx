import React from 'react';
import App, { Container } from 'next/app';
import Sidebar from '../components/layout/Sidebar';
import styles from '../styles/app.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className={styles.container}>
          <nav className={styles.sidebar}>
            <Sidebar />
          </nav>
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </div>
      </Container>
    );
  }
}

export default MyApp;
