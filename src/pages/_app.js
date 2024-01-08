import Header from "@/components/header";
import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import Store from "@/redux/store";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
