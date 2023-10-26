import React from "react";
import notFound from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { useTittle } from "../hooks";

export const PageNotFound = ({title}) => {
  useTittle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-slate-100 font-bold text-5xl my-10">
            404, Oops!{" "}
          </p>
          <p className="relative mt-[-1rem] mb-5 text-xl dark:text-slate-100">
            Page not found!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={notFound} alt="404 page not found" />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
