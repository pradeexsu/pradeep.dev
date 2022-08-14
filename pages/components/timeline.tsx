import React from "react";
import TimeLineItem, { TimeLineItemProp } from "./timeline-item";

const Timeline: React.FC<TimeLineItemProp[]> = (
  timeLineItemProps: TimeLineItemProp[]
) => {
  const experince = [
    timeLineItemProps["0"],
    timeLineItemProps["1"],
    timeLineItemProps["2"],
    timeLineItemProps["3"],
  ];

  return (
    <>
      <div className="mt-20 text-base ml-20">
        <ol className="relative border-l border-gray-200 dark:border-white">
          {experince.map((ex) => (
            <TimeLineItem {...ex} key={ex.title} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default Timeline;
