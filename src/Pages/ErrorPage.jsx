import React from "react";
import { Link } from "react-router";
import { FaSadTear } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="bg-[#0f172a] text-gray-300 min-h-screen flex flex-col justify-center items-center px-4">
      <FaSadTear className="text-7xl text-purple-400 animate-bounce mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        Oops!
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-md text-center">
        The page you’re looking for doesn’t exist or an error occurred.
      </p>
      <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-8"></div>
      <Link
        to="/"
        className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-80 font-medium transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
