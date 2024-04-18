import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    console.log('Rendering RootLayout'); // Will be logged on server
    return (
        <html>
        <body>{children}</body>
        </html>
    );
}
