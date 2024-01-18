import React from "react";
import { Button } from "@/components/ui/button";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-[160px]">
      <div className="text-center text-white text-5xl font-semibold  leading-[56px]">
        Your movie list is empty
      </div>
      <Button className="px-10 text-white bg-[#2BD17E] mt-[24px] text-[16px] py-6 rounded-[10px] text-center text-base font-bold leading-normal hover:bg-[#2BD17E]/75">
        Add a new movie
      </Button>
    </div>
  );
};

export default Empty;
