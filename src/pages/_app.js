import Header from "@/components/header";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Store from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
          <Header />
          <Component {...pageProps} />
      </Provider>
    </>
  );
}
