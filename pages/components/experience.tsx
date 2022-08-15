import React from "react";
import SectionTitle from "./section-title";
import TimeLineItem, { TimeLineItemProp } from "./timeline-item";

const Experience: React.FC<TimeLineItemProp[]> = (
  timeLineItemProps: TimeLineItemProp[]
) => {
  const experince = [
    timeLineItemProps["0"],
    timeLineItemProps["1"],
    timeLineItemProps["2"],
    timeLineItemProps["3"],
  ];

  return (
    <section className="mt-10 mb-10">
      <SectionTitle title={"Experience"} link={"#experience"} />
      <div
        className="mt-10 text-base ml-20 scroll-m-44 print:hidden"
        id="experience"
      >
        <ol className="relative border-l border-gray-200 dark:border-white">
          {experince.map((ex) => (
            <TimeLineItem {...ex} key={ex.title} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
