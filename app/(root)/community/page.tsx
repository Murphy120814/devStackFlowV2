import React from "react";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import { UserFilters } from "@/constants/filtersConstants";
import UserCard from "@/components/shared/UserCard";
import Link from "next/link";
import { getAllUsers } from "@/lib/actions/user.action";
export default async function Page() {
  const result = await getAllUsers({});
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search User..."
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
        />
      </div>
      <section className="w-full mt-12 gap-4 items-center flex flex-wrap ">
        {result.users.length > 0 ? (
          result.users.map((user) => (
            <UserCard key={user.clerkId} user={user} />
          ))
        ) : (
          <div className="paragraph-regular mt-12 text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link href="/sign-up" className="mt-1 font-bold text-accent-blue">
              Join to be first
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
