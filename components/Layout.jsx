import Head from "next/head";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Graph CMS</title>
        <meta
          name="description"
          content="A CMS Blog using Next.js & TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
    </>
  );
};

export default Layout;
