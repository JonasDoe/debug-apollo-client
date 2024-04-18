import {NextSSRInMemoryCache} from '@apollo/experimental-nextjs-app-support/ssr';

export default function RootLayout() {
    return (
        <html>
        <body>{typeof NextSSRInMemoryCache}</body>
        </html>
    );
}
