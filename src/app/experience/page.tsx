import { experiences } from "@/data/experiences";
import React from "react";

const Experience = () => {
  return (
    <>
      <section className="py-6 md:pt-12 lg:pb-24 min-h-[90vh] flex justify-center items-center">
        <div className="container-md ">
          <div className="flex flex-col items-center gap-8 md:text-xl">
            {experiences?.map((item, index) => (
              <div key={`exp-${index}`} className="w-full max-w-[400px]">
                {/* <span className="text-2xl text-gray-600">{item?.years}</span> */}
                <p className="dark:text-gray-300 text-gray-600">
                  {item.company}
                  {" | "}
                  <span className="text-gray-500">{item.years}</span>
                </p>
                <p className="text-xl text-gray-400">{item.position}</p>
                <p className="mt-1 ">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
