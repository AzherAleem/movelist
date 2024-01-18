import React from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const SignIn = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center h-screen ">
      <div className="text-center text-white text-[64px] font-semibold leading-[80px]">
        Sign in
      </div>
      <div className="w-[300px]  relative mt-10">
        <Input
          className="bg-[#224957] text-white rounded-[10px] ring-0 border-none placeholder:text-white"
          placeholder="Email"
        />
      </div>
      <div className="w-[300px]  relative mt-[24px]">
        <Input
          className="bg-[#224957] text-white rounded-[10px] ring-0 border-none placeholder:text-white"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="flex items-center mt-[24px] space-x-2">
        <Checkbox
          id="remember"
          className="text-white bg-[#224957] border-none"
        />
        <label
          htmlFor="remember"
          className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </label>
      </div>
      <Button className="w-[300px]  text-white bg-[#2BD17E] mt-[24px] text-[16px] py-6 rounded-[10px] text-center text-base font-bold leading-normal hover:bg-[#2BD17E]/75">
        Login
      </Button>
    </div>
  );
};

export default SignIn;
