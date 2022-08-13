import React from "react";

export type TimeLineItemProp = {
  date: string;
  title: string;
  description: string;
  logoUrl: string;
  organization: string;
};

const TimeLineItem: React.FC<TimeLineItemProp> = ({
  date,
  title,
  description,
  organization,
  logoUrl,
}: TimeLineItemProp) => (
  <>
    <li className={`mb-${10 + logoUrl ? 8 : 0} ml-4`}>
      {logoUrl ? (
        <img src={logoUrl} className="select-none rounded-full -mx-24 -mb-4" width={50} />
      ) : null}
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 italic text-xs">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        {organization}
      </h4>
      <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  </>
);

export default TimeLineItem;