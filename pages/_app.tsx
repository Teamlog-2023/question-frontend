import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleOAuthProvider clientId="697324655741-66cph4r64bevu6e7o8kk10v54tgl9ate.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </>
  );
}
