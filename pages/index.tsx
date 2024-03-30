import styles from "@/styles/Home.module.css";
import Head from "next/head";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Awards from "@/components/Awards/Awards";
import Contacts from "@/components/Contacts/Contacts";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes='32x32' href="../public/img/cddisk.png"/>
      </Head>
      <Layout>
        <main>
          <About/>
          <Projects/>
          <Awards/>
          <Contacts/>
        </main>
      </Layout>
      <div className={styles.container}>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>
      </div>
    </>
  );
}
