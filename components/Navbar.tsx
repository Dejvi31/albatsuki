import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-home-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Logo"
          className="max-sm:size-10"
        />
      </Link>

      <Search />

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
