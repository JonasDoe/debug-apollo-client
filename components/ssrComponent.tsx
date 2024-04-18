'use client' // ensure that /ssr is not invoked from a react server component

import {NextSSRInMemoryCache} from '@apollo/experimental-nextjs-app-support/ssr';

export const SsrComponent: React.FC = () => {
    console.log('Rendering SSRComponent'); // Will be logged on server and client
    return "ssrComponent: " + typeof NextSSRInMemoryCache
}