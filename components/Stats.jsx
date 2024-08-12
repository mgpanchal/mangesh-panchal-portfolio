"use client";

import CountUp from "react-countup";

const stats = [
  { num: 8, text: "Years of Experience" },
  { num: 42, text: "Project Completed" },
  { num: 12, text: "Technology Mastered" },
  { num: 568, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (

              <div
                className="flex-1 flex gap-4 items-center justify-center border-2 border-accent rounded-md p-3"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-5xl font-extrabold text-orange-400"
                />
                <p
                  className={`${
                    item.text.lenght < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-accent`}
                >
                  {item.text}
                </p>
                
              </div>


            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
