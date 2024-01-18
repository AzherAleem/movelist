import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { dimensions } from "@/lib/movies";
const Movie = ({
  movie,
  aspectRatio = "portrait",
  width,
  height,
  className,
  key,
  ...props
}) => {
  console.log("movies", movie);
  const dim = dimensions;
  return (
    <>
      <div
        key={key}
        className="group relative cursor-pointer  bg-[#092C39] p-2 pb-4 rounded-2xl backdrop-blur-2xl"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={`/${movie.poster}`}
            alt={movie.title}
            width={dim[movie.poster].width}
            height={dim[movie.poster].height}
            className={cn(
              "h-full w-full object-cover object-center lg:h-full lg:w-full transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </div>
        <div className="flex flex-col p-4">
          <div className="text-white text-xl font-medium leading-loose">
            {movie.title}
          </div>
          <div className="text-white text-sm font-normal leading-normal">
            {movie.year}
          </div>
        </div>
      </div>
      {/* <div className="overflow-hidden w-[282px] h-[504px] px-2 pt-2 pb-4 bg-teal-950 rounded-xl backdrop-blur-[200px] flex-col justify-start items-start gap-4 inline-flex">
      <Image
        src={`/${movie.poster}`}
        alt={movie.title}
        width={width}
        height={height}
        className={cn(
          "h-auto w-auto object-cover transition-all hover:scale-105",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
        )}
      />
    </div> */}
    </>
  );
};

export default Movie;
