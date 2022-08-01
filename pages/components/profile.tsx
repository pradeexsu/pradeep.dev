
import React from "react";

interface ProfileProps {
    name: string,
    image_url: string,
    title: string,
    short_title: string,
    logo_url: string
}


const Profile: React.FC<ProfileProps> = ({ name, image_url, title, logo_url, short_title }: ProfileProps) =>
(<>
    <div>
    <main className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 text-lg text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">

        <div className="transition duration-300 opacity-100">
        <div className="flex items-center space-x-6 rounded-md">
        <div className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg p-[3px] ring-[5px] ring-purple-500/10">
            <div className="rounded-full p-px h-[64px] w-[64px]">
                <img alt="A photo of Pradeep" src={image_url} width="64" height="64" decoding="async" data-nimg="future" className="rounded-full" />
            </div>
        </div>
        <div>
            <h1 className="text-3xl font-medium text-rose-100/80 sm:text-4xl">{name}</h1>
            <h2 className="align-middle text-lg leading-6 text-rose-100/50">
                <span className="hidden sm:inline">{title}</span>
                <span className="inline sm:hidden" title="Developer Experience">{short_title}</span> at &nbsp;
                <span className="font-medium text-rose-100/70">
                    <img src={logo_url} className="-my-2 inline-block text-[24px] select-none" />
                </span>
            </h2>
        </div>
    </div>
    <p className="mt-7 text-xl text-rose-100/90 sm:mt-9">
        Welcome to my digital garden where I share what I'm learning about shipping great products,
        becoming a better developer and growing a career in tech.
        </p>
           
            <div className="mt-8 sm:mt-12">
                <div className="flex items-center space-x-7 text-base font-medium leading-none text-rose-100/90 sm:text-lg">
                    <a className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70" href="/videos">
                        <div className="sm:flex sm:items-center sm:space-x-2"><div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                            <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                            <div>Videos</div>
                        </div>
                    </a>
                    <a className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70" href="/blog">
                        <div className="sm:flex sm:items-center sm:space-x-2">
                            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                                <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110">
                                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div>Posts</div>
                        </div>
                    </a>
                    <a className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70" href="https://twitter.com/delba_oliveira">
                        <div className="sm:flex sm:items-center sm:space-x-2">
                            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                                <div className="rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div>Twitter</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </main>

    </div>

</>);


export default Profile