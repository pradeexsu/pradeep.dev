function stackOverflow(){
    return(
        <a
        className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        href="https://"
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
                clipRule="evenodd"
                baseProfile="basic"
                className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110"
              >
                <path
                  fill-rule="evenodd"
                  d="M50.62,40.505h4.499V58.5H14.63V40.505h4.499v13.496H50.62V40.505z"
                  clipRule="evenodd"
                />
                <path d="M24.031,39.168l0.929-4.419l22.095,4.646l-0.929,4.417L24.031,39.168z" />
                <path d="M26.955,28.588l1.906-4.093l20.468,9.532l-1.907,4.093L26.955,28.588z" />
                <path d="M32.619,18.547l2.89-3.47L52.86,29.526l-2.89,3.47L32.619,18.547z" />
                <path d="M43.819,7.866l13.475,18.118l-3.623,2.695L40.196,10.561L43.819,7.866z" />
                <path d="M23.627,49.503v-4.499h22.493v4.499H23.627z" />
              </svg>
            </div>
          </div>
          <div>Stackover</div>
        </div>
      </a>
    )
}