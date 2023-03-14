import "@/styles/globals.css";
import UserLoggedIn from "./context/ApiContext";

export default function App({ Component, pageProps }) {
  const userLogged = true
  return (
    <UserLoggedIn.Provider value={userLogged}>
      <Component {...pageProps} />
    </UserLoggedIn.Provider>
  );
}
