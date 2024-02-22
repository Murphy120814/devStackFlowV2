import React from "react";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import { UserFilters } from "@/constants/filtersConstants";
import UserCard from "@/components/shared/UserCard";
export default function Page() {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search User ..."
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
          containerClasses={"flex"}
        />
      </div>
      <div className="w-full mt-12 gap-4 items-center flex flex-wrap ">
        <UserCard />
      </div>
    </section>
  );
}
