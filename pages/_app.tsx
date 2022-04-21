import { AppProps } from "next/app";
import "../styles/index.scss";
import "../node_modules/tailwindcss/tailwind.css";

import { AppContextProvider } from "../contexts";

const App = ({ Component, pageProps }: AppProps): unknown => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default App;
