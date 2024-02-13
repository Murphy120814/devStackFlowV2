import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserButton, SignedIn } from "@clerk/nextjs";
function Navbar() {
  return (
    <nav
      className={
        "flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"
      }>
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevStackFlow logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">StackFlow</span>
        </p>
      </Link>
      globalSearch
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
