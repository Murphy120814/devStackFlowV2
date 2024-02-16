"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filtersConstants";
import { Button } from "@/components/ui/button";
function HomeFilter() {
  const active = "recommended";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onClick={() => {
              console.log("clicked");
            }}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              active === item.value
                ? "bg-primary-100 text-primary-500"
                : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:hover:bg-dark-300 "
            }`}>
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}

export default HomeFilter;
