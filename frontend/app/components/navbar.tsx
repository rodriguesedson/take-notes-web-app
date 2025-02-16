'use client'

import Link from "next/link";

export default function Navbar() {

  return (
    <ul className="flex w-full justify-around">
      <li className="group">
        <Link className="border-b in-active:border-none" href={"/notas"}>Notas</Link>
      </li>
      <li>
        <Link href={'/pastas'}>Pastas</Link>
      </li>
    </ul>
  )
}