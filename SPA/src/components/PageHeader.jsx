const PageHeader = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:xl:text-5xl leading-tight text-gray-900">
          Best Website builders in the US
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex flex-col xl:lg:flex-row gap-6 xl:lg:gap-0 items-center justify-between border-t border-gray-200">
          <div className="flex items-center">
            <img className="h-[20px] w-[20px]" src="/tik.png" alt="" />
            <p className="text-xs md:text-sm text-gray-500 pl-4">
              {" "}
              Last Updated - February 22, 2020
            </p>
            <span className="ml-4 pl-4 flex items-center">
              <img className="h-[20px] w-[20px]" src="/i.png" alt="" />
              <span className="ml-1 text-xs md:text-sm text-gray-500 pl-4">
                Advertising Disclosure
              </span>
            </span>
          </div>
          <div className="ml-4 flex-shrink-0 ">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:r5:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              data-placeholder=""
              className="flex h-10 w-[9rem] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="sort"
            >
              <span style={{ pointerEvents: "none" }}>Top Relevant</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="py-4 border-t border-gray-200 ">
          <div dir="ltr" data-orientation="horizontal">
            <div
              className="space-x-4 overflow-x-auto whitespace-nowrap scrollbar-none"
              style={{
                msOverflowStyle: "none" /* IE and Edge */,
                scrollbarWidth: "none" /* Firefox */,
                WebkitOverflowScrolling: "touch",
              }}
            >
              <button className="md:w-[7.5rem] inline-flex items-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900">
                Tools
              </button>
              <button className="md:w-[7.5rem] inline-flex items-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900">
                AWS Builder
              </button>
              <button className="md:w-[7.5rem] inline-flex items-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900">
                Start Build
              </button>
              <button className="md:w-[7.5rem] inline-flex items-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900">
                Build Supplies
              </button>
              <button className="md:w-[7.5rem] inline-flex items-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900">
                Tooling
              </button>
              <button className="md:w-[7.5rem] inline-flex items-center whitespace-nowrap rounded-md text-xs md:text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900">
                BlueHosting
              </button>
            </div>
          </div>
        </div>
        <div className="py-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap scrollbar-none">
              <li>
                <div className="flex items-center">
                  <a
                    className="text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700"
                    href="#"
                  >
                    Home
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <a
                    className="ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700"
                    href="#"
                  >
                    Hosting for all
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <a
                    className="ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700"
                    href="#"
                  >
                    Hosting
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <a
                    className="ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700"
                    href="#"
                  >
                    Hosting6
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <a
                    className="ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700"
                    href="#"
                  >
                    Hosting5
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
