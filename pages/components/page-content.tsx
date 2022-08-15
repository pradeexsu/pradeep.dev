export default function PageContent() {
  const items = [
    {
      name: "Bio",
      link: "#bio",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "My Work",
      link: "#projects",
    },
    {
      name: "My Posts",
      link: "#posts",
    },
  ];
  return (
    <div className="sticky top-56 mt-12 z-30 !col-start-4 pl-12 hidden md:block">
      <div className="space-y-10">
        <div className="space-y-2 text-sm">
          <div className="uppercase text-rose-100/30">On this page</div>
          {items.map((item) => (
            <div>
              <a
                href={item.link}
                className="block selection:text-[#6DFC6B] text-rose-100/50 underline-offset-2 transition-all hover:text-rose-100 hover:underline hover:decoration-rose-200/50 pl-4"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <button className="shadow-lgx group relative block transform overflow-hidden rounded-full bg-gradient-to-tl from-white/5 to-white/30 p-1 transition-all duration-300 ease-out hover:scale-[1.4] hover:rounded-full active:scale-100 active:rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]/70 hover:shadow-[#5761B2]/50">
              <div className="absolute inset-0 transform-gpu bg-gradient-to-tl from-[#5761B2] to-[#00FFFF] transition-transform"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="relative w-5 transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
              >
                <path
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="text-lg font-medium leading-none text-rose-100/90">
            <span>18315</span>
          </div>
        </div>
      </div>
    </div>
  );
}
