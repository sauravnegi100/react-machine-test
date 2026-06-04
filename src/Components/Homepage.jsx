import React from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <article className="flex flex-col items-center gap-20 bg-white w-150 m-auto mt-20 p-10 rounded-md shadow-[1px_1px_10px]">
      <div className="text-3xl font-bold flex flex-col items-center gap-4">
        <span>Task 1</span>
        <Link
          to="/counter"
          className="bg-green-400 px-5 py-2 rounded-md text-white hover:scale-105 transition-all"
        >
          Counter App
        </Link>
      </div>
      <div className="text-3xl font-bold flex flex-col items-center gap-4">
        <span>Task 2</span>
        <Link
          to="/users"
          className="bg-green-400 px-5 py-2 rounded-md text-white hover:scale-105 transition-all"
        >
          Fetch API Data
        </Link>
      </div>
    </article>
  );
};

export default Homepage;
