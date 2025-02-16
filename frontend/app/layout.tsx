import Header from "./components/header";
import Navbar from "./components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-10">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
