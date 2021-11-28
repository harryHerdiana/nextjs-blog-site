import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
