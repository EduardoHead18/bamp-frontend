import Head from "next/head";
import { HeaderNavbar } from "./header/HeaderNavbar";
import { FooterComponent } from "./footer/FooterComponent";
import DataProviderApp from "@/pages/context/DataProvider";
export const Layaut = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bambp App</title>
        <meta name="description" content="venta de autos"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <script src="https://unpkg.com/scrollreveal"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <HeaderNavbar></HeaderNavbar>
        <main className="flex-grow">{children}</main>
        <FooterComponent></FooterComponent>
      </div>
    </>
  );
};
