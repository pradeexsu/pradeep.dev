//@ts-ignore
import React from "react";

function MyExperence() {
  return (
    <div>
      <div className="mx-auto">
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-boarderGray">
            Jul 2022 - Present (~2 Years)
          </h3>
        </div>
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-boarderGray">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <img
                className="flex-shrink-0 size-7 rounded-full border border-white"
                src="data:image/png;base64,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"
                alt="Image Description"
              />
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold ">
              Software Development Engineer
            </h3>
            <p className="mt-1 text-sm ">
              <ul>
                <li>
                  • Led the ideation, development, and delivery of high-quality
                  cart-service, government security, and IPO products,
                  optimizing workflows to ensure on-time and under-budget
                  completion.
                </li>
                <li>
                  • Secured user data and compliance across back-office
                  applications by implementing SAML based Azure AD authorization
                  services.
                </li>
                <li>
                  • Designed and implemented role-based CMS using React and
                  Spring Boot, that efficiently manages large JSON
                  configurations(content and view) for mutual fund mobile app,
                  prioritizing both security and operational efficiency.
                </li>
                <li>
                  • Integrated multiple access control-based websites, ensuring
                  secure user authentication and access control.
                </li>
                <li>
                  • Architected and implemented dynamic forms, fostering
                  seamless and intuitive user experiences.
                </li>
                <li>
                  • Leveraged typescript and react to create reusable
                  HOCs(Higher-Order Components) and patterns. this approach
                  slashed development time by 50%, significantly boosting team
                  productivity.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-boarderGray">
            Mar-Jun, 2022 (4 months)
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-boarderGray">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <img
                className="flex-shrink-0 size-7 rounded-full border border-white"
                src="data:image/png;base64,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"
                alt="Image Description"
              />
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold ">
              Software Development Internship
            </h3>
            <ul>
              <li>
                • Contributed to developed high-availability micro-services
                architecture using gRPC and REST dedicated to ipo and
                mutual-funds, maintained exceptional service uptime of 99.9%,
                scale handled upto millions of daily requests.
              </li>
              <li>
                • Leveraged Next.js SSR(Server Side Rendering) to boost server
                efficiency by 50%, ensuring smooth performance for the
                high-traffic IPO webpage. This approach kept content fresh
                despite frequent updates.
              </li>
              <li>
                • Effectively Researched and resolved critical production issues
                under tight deadlines, with 90% success rate in root cause
                analysis and issues resolution.
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-boarderGray">
            Jul-Dec, 2022 (6 months)
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-boarderGray">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <span className="flex flex-shrink-0 justify-center items-center size-7 border border-white text-sm font-semibold uppercase  rounded-full">
                W
              </span>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold ">
              Software Development Internship
            </h3>
            <ul className="text-sm">
              <li>
                • Learned and applied android development with Java and Kotlin,
                implemented reusable and user-friendly UI and APIs integrated
                into the Shopdeck Android app.
              </li>
              <li>
                • Resolved bugs reported by Crashlytics through code debugging
                and rigorous testing. Optimized app performance and
                responsiveness.
              </li>
              <li>
                • Engaged in daily sprint planning sessions and actively
                participated in code reviews to ensure adherence to project
                goals and quality standards.
              </li>
            </ul>
          </div>
        </div>

        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-boarderGray">
            Jul, 2018-22
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-boarderGray">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-boarderGray border border-boarderGray text-[10px] font-semibold uppercase  rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png"
                  alt=""
                  className="border border-white rounded-full"
                />
              </span>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold ">Take a break ⛳️</h3>
            <p className="mt-1 text-sm ">Just chill for now... 😉</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperence;
