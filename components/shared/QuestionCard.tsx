import React from "react";
import RenderTags from "./RenderTags";
import Link from "next/link";
import Metric from "@/components/shared/Metric";
import { getTimeStamp } from "@/lib/utils";
interface Props {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
    totalQuestions: number;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}
function QuestionCard({
  _id,
  tags,
  author,
  views,
  upvotes,
  createdAt,
  answers,
  title,
}: Props) {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
          {/* If signed in add edit delete action
           */}
        </div>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2 ">
        {tags.map((tag) => {
          return <RenderTags key={tag._id} id={tag._id} name={tag.name} />;
        })}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap items-center gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="User"
          value={author.name}
          title={`| ${getTimeStamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor={true}
          textStyle="body-medium text-dark400_light700"
        />
        <div className="flex flex-wrap items-center gap-4">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={upvotes}
            title="Votes"
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="Message"
            value={answers.length}
            title="Answers"
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="view"
            value={views}
            title="Views"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
}
export default QuestionCard;
