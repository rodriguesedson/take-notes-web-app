'use client'

import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import Header from "../components/header";
import "../globals.css";
import { Link } from "@heroui/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [notesActive, setNotesActive] = useState(false);
  const [foldersActive, setFoldersActive] = useState(false);
  const pathname = usePathname();

  function getPath() {
    if (pathname === '/home/notes') {
      setNotesActive(true);
      setFoldersActive(false);
    } else if (pathname === '/home/folders') {
      setNotesActive(false);
      setFoldersActive(true);
    } else {
      setNotesActive(false);
      setFoldersActive(false);
    }
  }

  useEffect(() => {
    getPath();
  }, [])

  return (
    <html lang="en" className="h-full">
      <body className="px-10 h-full">
        <Header />
        <Navbar
          classNames={{item: [
            'w-full',
            'flex',
            'justify-center',
            'data-[active=true]:border-b'
          ]}}
        >
          <NavbarContent className="flex w-full justify-around">
            <NavbarItem isActive={notesActive}>
              <Link 
                className="w-full flex justify-center"
                color="foreground" 
                href={"/home/notes"}
                >Notes</Link>
            </NavbarItem>
            <NavbarItem isActive={foldersActive}>
              <Link
                className="w-full flex justify-center"
                color="foreground" 
                href={"/home/folders"}
                >Folders</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
