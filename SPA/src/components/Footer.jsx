const Footer = () => {
  return (
    <footer className="bg-[#212731] overflow-hidden">
      <div className="sm:md:mx-[2rem] xl:lg:mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-md uppercase text-white">Categories</h2>
            <ul className="text-gray-500 dark:text-gray-400  font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Web Builder
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Hosting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Data Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Robotic-Automation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md uppercase text-white">Contact</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Categories
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className=" text-gray-200 py-2 px-4 rounded inline-flex items-center">
              United States
              <svg
                className="fill-current w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
