import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Form from "@/components/movies/Form";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex mt-[100px] text-white w-full">
        <div className="flex justify-between items-center w-full">
          <div className=" flex items-center justify-center gap-2 text-center text-white sm:text-5xl font-semibold  sm:leading-[56px] text-[32px] leading-10">
            Create a new movie
          </div>
        </div>
      </div>
      <Form />
    </MaxWidthWrapper>
  );
};

export default Page;
