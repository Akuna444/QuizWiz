import Link from "next/link";
import React from "react";
import Image from "next/image";

import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";
import { History } from "lucide-react";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-[#4ECDC4] z-[10] dark:bg-gray-950 h-fit border-b border-zinc-300  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" height={60} width={60} />
          <p className="rounded-lg  text-white  px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            QuizWiz
          </p>
        </Link>
        <div className="flex text-white gap-3">
          <Link href="/history" className="flex gap-2">
            <History size={32} />
            <div className="md:flex hidden h-full items-center">
              <h1>History</h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
