'use client'

import Link from "next/link";
import {CgProfile} from 'react-icons/cg';
import {Input} from "@heroui/input";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  return (
    <header className="flex justify-between h-[5rem]">
      <Link href={"/profile"} className="flex justify-center items-center gap-4">
        <CgProfile />
        <h1>Nome</h1>
      </Link>
      <div className="flex justify-center items-center">
        <Input
          classNames={{
            base: "max-w-[10rem] md:max-w-[20rem] h-10 group",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<IoIosSearch className='text-white group-hover:text-black group-active:text-black' size={18} />}
          type="search"
        />
      </div>
    </header>
  )
}