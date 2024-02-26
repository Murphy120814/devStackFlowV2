import React from "react";
import { getQuestionById } from "@/lib/actions/question.action";
import Link from "next/link";
import Image from "next/image";
import Metric from "@/components/shared/Metric";
import { getTimeStamp } from "@/lib/utils";
import RenderTags from "@/components/shared/RenderTags";
import ParseHTML from "@/components/shared/ParseHTML";
import Answer from "@/components/shared/form/Answer";
interface Props {
  params: {
    id: string;
  };
}
export default async function Page({ params }: Props) {
  const result = await getQuestionById({ questionId: params.id });
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            className="flex items-center justify-start gap-1"
            href={`/profile/${result.author.clerkId}`}>
            <Image
              src={result.author.picture}
              alt="authorAvatar"
              className="rounded-full"
              width={22}
              height={22}
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
          <div className="flex justify-end">Voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
        <div className="mb-8 mt-5 flex flex-wrap gap-4 w-full items-start">
          <Metric
            imgUrl="/assets/icons/clock.svg"
            alt="clock icon"
            value={`asked ${getTimeStamp(result.createdAt)}`}
            title=""
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="Answers"
            value={result.answers.length}
            title="Answers"
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="view"
            value={result.views}
            title="Views"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
        <ParseHTML content={result.content} />
        <div className="w-full mt-4 flex flex-wrap gap-2">
          {result.tags.map((tag: any) => {
            return (
              <RenderTags
                key={tag._id}
                id={tag._id}
                name={tag.name}
                showCount={false}
              />
            );
          })}
        </div>
        <div>
          <Answer />
        </div>
      </div>
    </>
  );
}
