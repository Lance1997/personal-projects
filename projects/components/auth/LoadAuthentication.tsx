import type { DefaultProp } from '../../types/props';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import React from 'react';
import Head from 'next/head';

const LoadAuthentication = (props: DefaultProp) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  const loadingMessage = 'Loading, please wait...';
  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return props.children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div>
      <Head>
        <title>Loading</title>
      </Head>
      <p>{loadingMessage}</p>
    </div>
  );
};

export default LoadAuthentication;
