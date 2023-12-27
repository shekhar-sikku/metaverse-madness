import '../styles/globals.css';

export async function generateMetadata() {
    return {
        title: 'METAVERSE MADNESS',
        description: 'A Modern Next 13 Website With Framer Motion & Tailwind CSS',
    }
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <head>
            <link rel="preconnect" href="https://stijndv.com" />
            <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        </head>
        <body>{children}</body>
    </html>
);

export default RootLayout;
