import "../styles/globals.css";
import { StateContext, useStateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  const test = useStateContext();
  console.log(useStateContext);
  return (
      <StateContext>
        <Component {...pageProps} />
      </StateContext>
  );
}

export default MyApp;
