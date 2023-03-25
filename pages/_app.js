import "@/styles/globals.css";
import { createContext, useState } from "react";

export const MyContext = createContext({});

export default function App({ Component, pageProps }) {
  const [dataUser, setDataUser] = useState({});
  return (
    <MyContext.Provider value={{ dataUser, setDataUser }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
