import React from "react";
import Movie from "./Movie";
import { AnimatePresence, motion } from "framer-motion";
import { useContextCustom } from "../context/stateContext";
import Filter from "./Filter";

const UpComingM = () => {
  const { filtered, coming } = useContextCustom();

  return (
    <div className=" container mx-auto bg-black h-screen">
      <Filter type={coming} />
      <p className=" text-xl font-semibold text-[#adff2f] px-20 py-10 mb-4">
        Up Coming Movies
      </p>
      {filtered?.length === 0 ? (
        <div className="text-2xl text-[#adff2f] font-semibold text-center">
          No result found.
        </div>
      ) : (
        <motion.div
          layout
          className=" flex flex-wrap justify-center gap-10 pt-3 pb-10"
        >
          <AnimatePresence>
            {filtered?.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default UpComingM;
