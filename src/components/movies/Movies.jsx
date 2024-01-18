import React from "react";
import Movie from "./Movie";
import { movies } from "@/lib/movies";
import Empty from "./Empty";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Movies = () => {
  return movies.length > 0 ? (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            className="w-[250px]"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        ))}
      </div>
      <Pagination className="mt-16">
        <PaginationContent className="space-x-2">
          <PaginationItem className="text-white">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="bg-[#2BD17E] rounded-md text-center text-white hover:text-zinc-700 text-base font-bold leading-normal"
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="bg-[#092C39] rounded-md text-center text-white hover:text-zinc-700 text-base font-bold leading-normal"
              href="#"
            >
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className="text-white">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  ) : (
    <Empty />
  );
};
export default Movies;
