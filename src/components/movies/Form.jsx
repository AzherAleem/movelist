"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";

import { Loader2 } from "lucide-react";
import Dropzone from "react-dropzone";
import { Progress } from "@/components/ui/progress";

const Form = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  // const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };
  return (
    <div className="mt-16">
      <div className="flex flex-col flex-shrink-0 sm:flex-row gap-4 md:gap-16 lg:gap-32">
        <Dropzone
          multiple={false}
          accept={{
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
            "image/heic": [],
            "image/jfif": [],
          }}
          onDrop={async (acceptedFile) => {
            setIsUploading(true);

            const progressInterval = startSimulatedProgress();

            // handle file uploading

            setTimeout(() => {
              clearInterval(progressInterval);
              setUploadProgress(100);
            }, 5000);
          }}
        >
          {({ getRootProps, getInputProps, acceptedFiles }) => (
            <div
              {...getRootProps()}
              className="w-full sm:w-[473px] h-[372px] sm:h-[504px] min-w-[300px] flex items-center justify-center text-white bg-cyan-900 hover:bg-cyan-900/75 rounded-[10px] border-dashed border-2 border-white cursor-pointer"
            >
              <div className="flex items-center justify-center h-full w-full">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3_346)">
                      <path
                        d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_346">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="mt-2">Drag an image here</p>
                  {isUploading ? (
                    <div className="w-full mt-4 max-w-xs mx-auto">
                      <Progress
                        indicatorColor={
                          uploadProgress === 100 ? "bg-green-500" : ""
                        }
                        value={uploadProgress}
                        className="h-1 w-full bg-zinc-200"
                      />
                      {uploadProgress === 100 ? (
                        <div className="flex gap-1 items-center justify-center text-sm text-white text-center pt-2">
                          {acceptedFiles[0].name}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* {acceptedFiles && acceptedFiles[0] ? (
                  <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                    <div className="px-3 py-2 h-full grid place-items-center"></div>
                    <div className="px-3 py-2 h-full text-sm truncate">
                      {acceptedFiles[0].name}
                    </div>
                  </div>
                ) : null} */}

                <input
                  {...getInputProps()}
                  type="file"
                  id="dropzone-file"
                  className="hidden"
                />
              </div>
            </div>
          )}
        </Dropzone>
        {/* <div
          className="w-[473px] h-[504px] flex items-center justify-center text-white bg-cyan-900 hover:bg-cyan-900/75 rounded-[10px] border-dashed border-2 border-white cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_3_346)">
                <path
                  d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_346">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="mt-2">Drag an image here</p>
          </div>
        </div> */}
        <div className="w-full sm:w-auto">
          <div className="relative">
            <Input
              className="bg-[#224957] w-full sm:w-[300px] text-white rounded-[10px] ring-0 border-none placeholder:text-white"
              placeholder="Title"
            />
          </div>
          <div className="relative mt-6">
            <Input
              className="bg-[#224957] w-full sm:w-auto text-white rounded-[10px] ring-0 border-none placeholder:text-white"
              placeholder="Publishing year"
            />
          </div>
          <div className="flex mt-16 gap-4  w-full sm:w-[300px]">
            <Button className="text-white w-full border border-white bg-transparent text-[16px] py-6 rounded-[10px] text-center text-base font-bold leading-normal ">
              Cancel
            </Button>
            <Button className="text-white w-full bg-[#2BD17E] text-[16px] py-6 rounded-[10px] text-center text-base font-bold leading-normal hover:bg-[#2BD17E]/75">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
