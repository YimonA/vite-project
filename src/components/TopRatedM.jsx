import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { AnimatePresence, motion } from "framer-motion";
import { useContextCustom } from "../context/stateContext";
import Filter from "./Filter";

const TopRatedM = () => {
  const { filtered, topRated } = useContextCustom();

  return (
    <div className=" container mx-auto bg-black ">
      <Filter type={topRated} />
      <p className=" text-xl font-semibold text-[#ff0] px-20 py-10 mb-4">
        Top Rated Movies
      </p>

      {filtered?.length === 0 ? (
        <div className="text-2xl text-[#ff0] h-screen font-semibold text-center">
          No result found.
        </div>
      ) : (
        <motion.div
          layout
          className=" flex flex-wrap justify-center gap-10 pt-3 pb-24"
        >
          <AnimatePresence>
            {filtered?.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
            ;
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default TopRatedM;
