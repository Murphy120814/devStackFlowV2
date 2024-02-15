"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface Props {
  route: string;
  imgSrc: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
}
function LocalSearchBar({
  route,
  imgSrc,
  iconPosition,
  placeholder,
  otherClasses,
}: Props) {
  return (
    <div className="relative w-full max-w-[600px] ">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            width={24}
            height={24}
            alt="search"
            className="cursor-pointer"
          />
        )}

        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className={`paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none ${otherClasses}`}
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            width={24}
            height={24}
            alt="search"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default LocalSearchBar;
