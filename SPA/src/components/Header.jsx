import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 text-white h-16 flex items-center justify">
      <div className="w-1/2 ml-28">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="h-[2.4rem] block w-[70%] p-4 ps-10 text-sm text-[#212731] border rounded-lg bg-gray-50 "
              required
            />
          </div>
        </form>
      </div>
      <ul className="hidden xl:lg:flex w-1/2 gap-11 ">
        <li>
          <a className="text-white hover:text-gray-300" href="#">
            Categories
          </a>
        </li>
        <li>
          <a className="text-white hover:text-gray-300" href="#">
            Website Builder
          </a>
        </li>
        <li>
          <a className="text-white hover:text-gray-300 pl-5" href="#">
            Today&apos;s Deals
          </a>
        </li>
      </ul>
      <div className="relative mx-auto xl:lg:hidden">
        <button
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <ul
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } bg-gray-500 text-white mt-2 p-2 rounded-lg shadow-lg w-[10rem] right-0`}
        >
          <li>
            <a className="block hover:text-gray-300" href="#">
              Categories
            </a>
          </li>
          <li>
            <a className="block hover:text-gray-300" href="#">
              Website Builder
            </a>
          </li>
          <li>
            <a className="block hover:text-gray-300" href="#">
              Today&apos;s Deals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
