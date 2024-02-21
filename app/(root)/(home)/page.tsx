import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import { HomePageFilters } from "@/constants/filtersConstants";
import Filter from "@/components/shared/Filter";
import HomeFilter from "@/components/home/HomeFilter";
import QuestionCard from "@/components/shared/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
  const result = await getQuestions({});
  if (!result) {
    return;
  }

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-questions" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions ..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses={"min-h-[56px] sm:min-w-[170px]"}
          containerClasses={"hidden max-md:flex"}
        />
      </div>
      <HomeFilter />
      <section className="mt-10 flex flex-col gap-6">
        {result.questions.length > 0 ? (
          result?.questions.map((question) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There is no questions to show!!"
            description={`Be the first to break the silence! 🚀 Ask a Question and kickstart the
              discussion. our query could be the next big thing others learn from. Get
        involved! 💡`}
            link="/ask-questions"
            buttonText="Ask a Question"
          />
        )}
      </section>
    </>
  );
}
