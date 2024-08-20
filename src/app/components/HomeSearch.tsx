"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;

    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="
        flex 
        w-full 
        mt-5 
        mx-auto 
        max-w-[90%] 
        border border-gray-200 
        px-5 py-3
        rounded-full
        hover:shadow-md
        transition-shadow
        sm:max-w-xl 
        lg:max-w-2xl
        items-center
      "
      >
        <AiOutlineSearch className="text-xl text-gray-500 " />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button
          className="
        bg-[#f8f9fa] 
        rounded-md 
        text-sm 
        text-gray-800 
        hover:ring-gray-200
        focus:outline-none 
        active:ring-gray-300
        hover:shadow-md
        w-36 
        h-10
        transition-shadow"
          onClick={(e) => handleSubmit(e as any)}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="
        bg-[#f8f9fa] 
        rounded-md 
        text-sm 
        text-gray-800 
        hover:ring-gray-200
        focus:outline-none 
        active:ring-gray-300
        hover:shadow-md
        w-36 
        h-10
        transition-shadow"
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Loading..." : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
