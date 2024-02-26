import React from "react";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import { UserFilters } from "@/constants/filtersConstants";
import { getAllTags } from "@/lib/actions/tag.actions";
import Link from "next/link";
import NoResult from "@/components/shared/NoResult";

export default async function Page() {
  const result = await getAllTags({});
  console.log(result.tags)
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Tags..."
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
        />
      </div>
      <section className="w-full mt-12 gap-4 items-center flex flex-wrap ">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              key={tag._id}
              href={`/tags/${tag._id}`}
              className="shadow-light100_darknone">
              <article className="background-light900_dark200 light-border flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]">
                <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
                  <p className="paragraph-semibold text-dark300_light900">
                    {tag.name}
                  </p>
                </div>
                <p className="small-medium text-dark400_light500 mt-3.5">
                  {" "}
                  <span className="body-semibold primary-text-gradient mr-2.5">
                    {tag.questions.length}+
                  </span>{" "}
                  Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="No Tags Found"
            description="It's look like there are no tags found"
            link="/ask-questions"
            buttonText="Ask a Question"
          />
        )}
      </section>
    </>
  );
}
