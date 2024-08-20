"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const SearchBox = () => {

  const router = useRouter();

  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('searchTerm');

  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return <form
    onSubmit={handleSubmit}
    className="
    flex 
    border 
    border-gray-200 
    rounded-full 
    shadow-lg 
    px-6 
    py-3
    ml-10
    mr-5
    flex-grow
    max-w-3xl
    items-center
    "
  >
    <input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      type="text"
      className="w-full focus:outline-none"
    />
    <RxCross2 onClick={() => setTerm("")} className="text-2xl text-gray-500 cursor-pointer sm:mr-2" />
    <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-500 mr-3 pl-4 cursor-pointer" />
    <AiOutlineSearch onClick={(e: any) => handleSubmit(e)} className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
  </form>;
};

export default SearchBox;
