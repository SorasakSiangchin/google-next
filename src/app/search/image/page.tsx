import ImageSearchResults from "@/app/components/ImageSearchResults";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }: any) => {

  const startIndex = searchParams.start || "1";

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)

  if (!response.ok) throw new Error("Something went wrong!");

  const data = await response.json();
  const result = data.items;

  if (!result) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or image for something else{"  "}
          <Link href={"/"} className="text-blue-500" >
            Home
          </Link>
        </p>
      </div>
    )
  }

  return <div>
    {result && <ImageSearchResults results={data} />}
  </div>;
};

export default page;
