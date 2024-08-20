import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";

const Page = () => {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col mt-24 justify-center items-center">
        <Image
          alt="Google Logo"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          }
          width={300}
          height={100}
          priority
          style={{
            width: "auto",
            height: "auto",
          }}
        />
        <HomeSearch />
      </div>
    </div>
  );
};

export default Page;
