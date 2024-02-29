const ModuleBox = () => {
  return (
    <div className="mx-12 md:mx-32 xl:lg:mx-48 flex flex-col xl:lg:flex-row justify-center items-center sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-normal lg:items-stretch xl:justify-start xl:items-stretch gap-5 bg-white border rounded-lg w-[75%] sm:md:h-[40rem] lg:xl:h-96 px-4 pb-4 mt-10">
      <div className="absolute left-[2rem] xl:lg:left-[11rem] xl:lg:mt-8 rounded-full border bg-white h-8 w-8 flex items-center justify-center text-black">
        4
      </div>
      <div className="flex flex-col justify-center items-center gap-2 w-[15rem] mt-5">
        <img src="/download3.png" alt="just text" />
        <h3 className="text-sm mb-1 text-center">CDK</h3>
      </div>
      <div className="text-sm md:text-base flex flex-col gap-2 justify-between items-start xl:lg:pt-5 w-[80%] md:w-[60%]">
        <p>
          <b>CDK Resposive Builder:</b> An extensive library of widgets and
          apps, and detailed step-by-step guides
        </p>
        <div className="text-[#074786] inline-flex items-center rounded-md whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold bg-[#F2F4F7] mt-3">
          20% Off
        </div>
        <div className="mt-3">
          <h3 className="font-bold">Main highlights</h3>
          <div className="bg-[#FFF4ED] px-4 pt-2 pb-1 rounded-xl w-[100%] xl:lg:w-[30rem] md:ml-4 mt-3">
            <div className="flex items-center mb-2">
              <div className="bg-white text-[#1B88F4] py-1 px-2 rounded-md mr-2">
                9.9
              </div>
              <div className="text-sm md:text-md ">Building Responsive</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="bg-white text-[#1B88F4] py-1 px-2 rounded-md mr-2">
                8.9
              </div>
              <div className="text-sm md:text-md ">Cool</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="bg-white text-[#1B88F4] py-1 px-2 rounded-md mr-2">
                8.9
              </div>
              <div className="text-sm md:text-md ">Cool</div>
            </div>
          </div>
        </div>
        <p className="mt-3">Why we love it</p>
        <div className="mb-3">
          <ul>
            <li className="flex gap-2">
              <img src="/tick.png" alt="" />
              <p>Documentation</p>
            </li>
            <li className="flex gap-2">
              <img src="/tick.png" alt="" />
              <p>Easy Use</p>
            </li>
            <li className="flex gap-2">
              <img src="/tick.png" alt="" />
              <p>Out of Box</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[17rem] items-center gap-5">
        <div className=" bg-[#F3F9FF] text-[#074786] border rounded-b-lg flex flex-col items-center p-5 w-[85%] md:w-[50%]">
          <h1 className="text-3xl">9.1</h1>
          <h3>Very Good</h3>
          <img src="/4.png" alt="" />
        </div>
        <button className="bg-[#1B88F4] text-white h-10 border rounded-lg w-[85%]">
          View
        </button>
      </div>
    </div>
  );
};

export default ModuleBox;
