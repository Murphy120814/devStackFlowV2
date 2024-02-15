"use client";

import React from "react";
import { themes } from "@/constants/constant";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { useTheme } from "@/context/ThemeProvider";
import clsx from "clsx";
function Theme() {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none ">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200 ">
          <Image
            src={
              mode === "light"
                ? "/assets/icons/sun.svg"
                : "/assets/icons/moon.svg"
            }
            alt="theme icon"
            height={25}
            width={25}
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-white py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}>
              <Image
                src={item.icon}
                alt={item.label}
                height={16}
                width={16}
                className={clsx({
                  "active-theme": mode === item.value,
                })}
              />
              <p
                className={`body-semibold ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}>
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
