import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LoadAuthentication from '../components/auth/LoadAuthentication';

function MyApp({ Component, pageProps }: AppProps) {
  const authComponent = Component.auth;
  return (
    <SessionProvider session={pageProps.session}>
      {authComponent ? (
        //TODO: wrap around an auth loading layout
        <LoadAuthentication>
          <Component {...pageProps} />
        </LoadAuthentication>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
