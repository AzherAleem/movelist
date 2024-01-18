import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Movies from "@/components/movies/Movies";
import React from "react";
const Page = () => {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Movies />
    </MaxWidthWrapper>
  );
};

export default Page;
