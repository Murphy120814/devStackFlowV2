import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTags from "@/components/shared/RenderTags";
const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 4,
  },
  {
    _id: "2",
    name: "javascript",
    totalQuestions: 4,
  },
  {
    _id: "3",
    name: "ReactJs",
    totalQuestions: 4,
  },
  {
    _id: "4",
    name: "javascript",
    totalQuestions: 4,
  },
  {
    _id: "5",
    name: "Redux",
    totalQuestions: 4,
  },
];
const hotQuestions = [
  {
    _id: "1",
    title: "How do i use express as the custom server in next js?",
  },
  {
    _id: "2",
    title: "How do i use express as the custom server in next js?",
  },
  {
    _id: "3",
    title: "How do i use express as the custom server in next js?",
  },
  {
    _id: "4",
    title: "How do i use express as the custom server in next js?",
  },
  {
    _id: "5",
    title: "How do i use express as the custom server in next js?",
  },
];
function RightSideBar() {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[320px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="w-full">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                key={question._id}
                href={`/questions/${question._id}`}
                className="flex cursor-pointer items-center justify-between gap-7">
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="cheveron-arrow-right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16 w-full ">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <RenderTags
                key={tag._id}
                id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;
