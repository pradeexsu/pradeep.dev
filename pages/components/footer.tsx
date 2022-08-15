import React from "react";

const Footer: React.FC = () => (
  <>
    <div className="mt-36 pb-36 text-base">
      <div className="text-gray-500">
        <div className="flex flex-col justify-between font-medium lg:flex-row">
          {/* <div className="flex space-x-5">
            <div>
              <a
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="/videos"
              >
                Videos
              </a>
            </div>
            
          </div> */}

          <div className="space-x-5 pt-2 lg:pt-0">
            <a
              href="https://twitter.com/pradeep_thar"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Twitter
            </a>
            <a
              href="https://stackoverflow.com/users/12537691/artist-pradeep"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Stack-overflow
            </a>
            <a
              href="https://github.com/sutharp777"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pradeep-swe"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-600">
        Built with&nbsp;
        <a
          href="https://nextjs.org"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
          Next.js
        </a>,&nbsp;
        {/* <a
          href="https://mdxjs.com"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
          MDX
        </a>
        ,&nbsp; */}
        <a
          href="https://tailwindcss.com"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
          Tailwind
        </a>
        and&nbsp;
        <a
          href="https://vercel.com"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
        Vercel
        </a>
      </p>
    </div>
  </>
);

export default Footer;
