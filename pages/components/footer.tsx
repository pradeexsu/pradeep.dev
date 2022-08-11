
import React from "react";
const Footer: React.FC = () => (
  <>
    <div className="mt-36 pb-36 text-base">
      <div className="text-gray-500">
        <div className="flex flex-col justify-between font-medium lg:flex-row">
          <div className="flex space-x-5">
            <div>
              <a
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="/videos"
              >
                Videos
              </a>
            </div>
            <div>
              <a
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="/blog"
              >
                Posts
              </a>
            </div>
            <div>
              <a
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="/tweets"
              >
                Inspired Tweets
              </a>
            </div>
            <div>
              <a
                className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="/unicode"
              >
                Unicode
              </a>
            </div>
          </div>
          <div className="space-x-5 pt-2 lg:pt-0">
            <a
              href="https://twitter.com/delba_oliveira"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/delba"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              YouTube
            </a>
            <a
              href="https://github.com/delbaoliveira"
              className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-600">
        Built with
        <a
          href="https://nextjs.org"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
          Next.js
        </a>
        ,
        <a
          href="https://mdxjs.com"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
          MDX
        </a>
        ,
        <a
          href="https://tailwindcss.com"
          className="hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        >
          Tailwind
        </a>
        and
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
