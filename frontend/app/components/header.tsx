'use client'

import Link from "next/link";
import {CgProfile} from 'react-icons/cg';
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [inputVisible, setInputVisible] = useState(false);

  function filter() {

  }

  return (
    <header className="flex justify-between h-[5rem]">
      <Link href={"/profile"} className="flex justify-center items-center gap-4">
        <CgProfile />
        <h1>Nome</h1>
      </Link>
      <div className="flex justify-center items-center">
        {
          inputVisible && 
          <Input 
            type="text"
            onValueChange={filter}
          />
        }
        <Button isIconOnly className="rounded-full bg-transparent" onPress={() => setInputVisible(true)}>
          <IoIosSearch className="h-[70%] w-[70%] text-white" />
        </Button>
      </div>
    </header>
  )
}