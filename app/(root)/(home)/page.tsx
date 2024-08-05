import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/LocalSearchbar";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy",
    tags: [
      { _id: "1", name: "Python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div in CSS?",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "html" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "john-doe.jpg",
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "Understanding Promises in JavaScript",
    tags: [
      { _id: "5", name: "JavaScript" },
      { _id: "6", name: "asynchronous" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "alice-johnson.jpg",
    },
    upvotes: 15,
    views: 200,
    answers: [],
    createdAt: new Date("2021-09-02T09:30:00.000Z"),
  },
  {
    _id: "4",
    title: "Getting Started with Docker",
    tags: [
      { _id: "7", name: "Docker" },
      { _id: "8", name: "containers" },
    ],
    author: {
      _id: "4",
      name: "Bob Brown",
      picture: "bob-brown.jpg",
    },
    upvotes: 8,
    views: 120,
    answers: [],
    createdAt: new Date("2021-09-03T10:15:00.000Z"),
  },
  {
    _id: "5",
    title: "Introduction to Machine Learning",
    tags: [
      { _id: "9", name: "Machine Learning" },
      { _id: "10", name: "AI" },
    ],
    author: {
      _id: "5",
      name: "Charlie Davis",
      picture: "charlie-davis.jpg",
    },
    upvotes: 20,
    views: 300,
    answers: [],
    createdAt: new Date("2021-09-04T14:45:00.000Z"),
  },
  {
    _id: "6",
    title: "Mastering React Hooks",
    tags: [
      { _id: "11", name: "React" },
      { _id: "12", name: "hooks" },
    ],
    author: {
      _id: "6",
      name: "Dana Lee",
      picture: "dana-lee.jpg",
    },
    upvotes: 12,
    views: 180,
    answers: [],
    createdAt: new Date("2021-09-05T16:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions:</h1>

        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-h-[170px] "
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Questions */}
        {questions.length > 0 ? (
          questions.map((question) => (
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
          ))
        ) : (
          <NoResult
            title={"No Questions Found"}
            description="Be the first to break the silence! Ask a Question and kickstart the
        discussion. Our Query could be the next big thing others learn from. Get
        involved!"
          />
        )}
      </div>
    </>
  );
};

export default Home;
