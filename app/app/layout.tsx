import Layout from '../components/Layout';
import '@pigment-css/react/styles.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <html lang="en">
        <body><Layout>{children}</Layout></body>
    </html>
    )
}