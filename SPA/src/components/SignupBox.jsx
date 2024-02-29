const SignupBox = () => {
  return (
    <div className="flex flex-col xl:lg:flex-row gap-4 justify-between items-center lg:mx-52 my-10">
      <div>
        <h2 className="mb-4 text-2xl md:text-3xl tracking-tight text-gray-900 sm:text-4xl bg-transparent">
          Sign up and get exclusive
        </h2>
        <h2 className="mb-4 text-2xl md:text-3xl tracking-tight text-gray-900 sm:text-4xl">
          special deals
        </h2>
      </div>
      <div className="flex ">
        <label
          htmlFor="signup"
          className="hidden mb-2 text-sm font-medium text-gray-900"
        >
          Signup
        </label>
        <input
          className="h-[2.5rem] block w-[12rem] xl:lg:w-[18rem] text-sm text-gray-900 rounded-lg border  sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
          type="signup"
          id="signup"
          required=""
        />

        <button
          type="submit"
          className="h-[2.5rem] w-[6rem] text-sm font-medium text-center bg-[#1B88F4] text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupBox;
