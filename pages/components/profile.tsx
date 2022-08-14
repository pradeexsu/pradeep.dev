import { FC, useRef } from "react";
import { useOnScreen } from "../../hooks/use-on-screen";

interface ProfileProps {
  name: string;
  image_url: string;
  title: string;
  short_title: string;
  logo_url: string;
}

const Profile: FC<ProfileProps> = ({
  name,
  image_url,
  title,
  logo_url,
  short_title,
}: ProfileProps) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <>
      <section className="scroll-m-32" id="bio" >
        <div className="transition duration-300 opacity-100 mb-2">
          <div className="flex items-center space-x-6 rounded-md ml-3">
            <div className="rounded-full bg-gradient-to-tl from-[#5761B2]/60 to-[#00E0C7]/60 shadow-lg p-[3px] ring-[5px] ring-purple-500/10">
              <div className="rounded-full bg-gradient-to-tl from-[#5761B2]/60 to-[#00E0C7]/60 shadow-lg p-[2px] ring-[5px] h-[64px] w-[64px] ring-purple-500/10 absolute animate-ping" />

              <div className="rounded-full p-px h-[64px] w-[64px] sticky">
                <img
                  alt="A photo of Pradeep"
                  src={image_url}
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="future"
                  className="rounded-full select-none"
                />
              </div>
            </div>
            <div className="pl-5">
              <h1 className="text-3xl  mb-1 font-medium text-rose-100/80 sm:text-4xl">
                {name}
              </h1>
              <h2 className="align-middle text-lg leading-6 text-rose-100/50">
                <span className="hidden sm:inline">{title}</span>
                <span className="inline sm:hidden" title="Developer Experience">
                  {short_title}
                </span>{" "}
                at &nbsp;
                <span className="font-medium text-rose-100/70">
                  <img
                    src={logo_url}
                    className="-my-2 inline-block text-[24px] select-none max-h-5"
                  />
                </span>
              </h2>
            </div>
          </div>
          <p className="mt-7 text-xl text-rose-100/90 sm:mt-9">
            {/* <span className="text-black decoration-wavy decoration-cyan-200 hover:decoration-cyan-400 link link-underline link-underline-black "></span> */}
            {/* <span className="underline decoration-green-400 hover:decoration-green-200 hover:decoration-dashed"> </span> */}
            <span ref={ref}>
              Welcome to my digital garden where I share what I'm learning about
              shipping great products, becoming a better developer and growing a
              career in tech.
            </span>
          </p>
        </div>
      </section>

      {/* <div className=" mt-8 sm:mt-12 sticky top-0">
      <div className="flex items-center space-x-7 text-base font-medium leading-none text-rose-100/90 sm:text-lg">
        <a
          className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
          href="/videos"
        >
          <div className="sm:flex sm:items-center sm:space-x-2">
            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
              <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
              </div>
            </div>
            <div>Videos</div>
          </div>
        </a>
        <a
          className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
          href="/blog"
        >
          <div className="sm:flex sm:items-center sm:space-x-2">
            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
              <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div>Posts</div>
          </div>
        </a>
        <a
          className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
          href="https://twitter.com/delba_oliveira"
        >
          <div className="sm:flex sm:items-center sm:space-x-2">
            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
              <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </div>
            </div>
            <div>Twitter</div>
          </div>
        </a>
      </div>
    </div> */}

      <div className="sticky top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] ">
        <div
          className={`pointer-events-auto col-start-2 -mx-px  px-4 py-2.5 shadow-surface-glass ${
            !isVisible && "backdrop-blur"
          } will-change-transform`}
        >
          <div className="flex items-center justify-between">
            <div
              className={`${
                isVisible && "invisible"
              } flex items-center space-x-6 select-none`}
            >
              <a
                title="View home page"
                className="rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0C7]/70"
                href="#bio"
              >
                <div className="rounded-full bg-gradient-to-tl from-[#5761B2]/60 to-[#00E0C7]/60 shadow-lg p-[2px] group transform transition ease-out hover:scale-105 hover:from-[#5761B2] hover:to-[#00E0C7] hover:shadow-[#00ffff]/25 active:translate-y-px">
                  <div className="rounded-full p-px h-[36px] w-[36px] transition duration-300 group-hover:scale-105">
                    <img
                      alt="A photo of Pradeep"
                      src="https://i.ibb.co/bQbRxkm/image.png"
                      width="36"
                      height="36"
                      decoding="async"
                      data-nimg="future"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-7 text-base font-medium leading-none text-rose-100/90 sm:text-lg will-change-transform">
              <a
                className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="https://stackoverflow.com/users/12537691/artist-pradeep"
              >
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                    <div className="rounded-full bg-gradient-to-tl from-[#5761B2]/80 to-[#00E0C7]/80 p-2 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-full group-hover:shadow-[#5761B2]/40 group-active:translate-y-1">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="10 10 55 55"
                        aria-hidden="true"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        baseProfile="basic"
                        className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M50.62,40.505h4.499V58.5H14.63V40.505h4.499v13.496H50.62V40.505z"
                          clip-rule="evenodd"
                        />
                        <path d="M24.031,39.168l0.929-4.419l22.095,4.646l-0.929,4.417L24.031,39.168z" />
                        <path d="M26.955,28.588l1.906-4.093l20.468,9.532l-1.907,4.093L26.955,28.588z" />
                        <path d="M32.619,18.547l2.89-3.47L52.86,29.526l-2.89,3.47L32.619,18.547z" />
                        <path d="M43.819,7.866l13.475,18.118l-3.623,2.695L40.196,10.561L43.819,7.866z" />
                        <path d="M23.627,49.503v-4.499h22.493v4.499H23.627z" />
                      </svg>
                    </div>
                  </div>
                  <div className="link-underline link-underline-black">
                    Stackover
                  </div>
                </div>
              </a>
              <a
                className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="https://linkedin.com/in/pradeep-swe"
              >
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                    <div className="rounded-full bg-gradient-to-tl from-[#5761B2]/80 to-[#00E0C7]/80 p-2 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-full group-hover:shadow-[#5761B2]/40 group-active:translate-y-1">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="3 3 25 25"
                        className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                      >
                        <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                      </svg>{" "}
                    </div>
                  </div>
                  <div className="link-underline link-underline-black">
                    Linkedin
                  </div>
                </div>
              </a>

              <a
                className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
                href="/blog"
              >
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                    <div className="rounded-full bg-gradient-to-tl from-[#5761B2]/80 to-[#00E0C7]/80 p-2 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-full group-hover:shadow-[#5761B2]/40 group-active:translate-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="link-underline link-underline-black">
                    Posts
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
