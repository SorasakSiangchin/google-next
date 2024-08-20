import React from "react";
import SearchHeader from "../components/SearchHeader";
// import "./../globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default layout;
