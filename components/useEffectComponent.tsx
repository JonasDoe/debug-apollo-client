'use client' // ensure that /ssr is not invoked from a react server component

import {NextSSRInMemoryCache} from '@apollo/experimental-nextjs-app-support/ssr';
import {useEffect} from "react";

export const UseEffectComponent: React.FC = () => {
    console.log('Rendering UseEffectComponent'); // Will be logged on server and client
    useEffect(()=>{console.log("UseEffectComponent useEffect callback invoked")},[])
    return "useEffectComponent: " + typeof NextSSRInMemoryCache
}