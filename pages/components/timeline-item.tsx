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
    <li className={`mb-${10 + logoUrl ? 8 : 0} ml-4 px-2`}>
      {logoUrl ? (
        <img src={logoUrl} className="select-none rounded-full -mx-24 -mb-10" width={50} />
      ) : null}
      <div className="absolute w-3 h-3 bg-rose-100 rounded-full mt-1.5 -left-1.5 border border-white dark:border- dark:bg-"></div>
      <h3 className="text-lg font-semibold text-rose-100/90 dark:">
        {title}
      </h3>
      <h4 className="text-sm font-semibold text-rose-100/90 dark:text-">
        {organization}
      </h4>
      <time className="mb-1 text-sm font-normal leading-none text-rose-100/90 dark:text- italic text-xs">
        {date}
      </time>

      <p className="mt-4 mb-4 text-base font-normal text-rose-100/90 dark:text-">
        {description }
      </p>
    </li>
  </>
);

export default TimeLineItem;