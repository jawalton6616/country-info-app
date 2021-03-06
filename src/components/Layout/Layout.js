import Link from "next/link";
import Head from "next/head";
import styles from "./layout.module.css";

const Layout = ({ children, title = "Country Info" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1 style={{ display: "inline" }}>Country Info</h1>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Jacob Walton <br />
        Created with Next JS, and deployed via Vercel.
      </footer>
    </div>
  );
};

export default Layout;
