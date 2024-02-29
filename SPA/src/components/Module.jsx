const Module = ({
  name,
  highlight,
  highlightText,
  icon,
  boldText,
  text,
  what_you_get,
  rating,
  remark,
  remark_icon,
  number,
}) => {
  return (
    <div className="mx-12 md:mx-32 xl:lg:mx-48 flex flex-col xl:lg:flex-row justify-between items-center sm:justify-center sm:items-center md:justify-center md:items-center lg:justify-normal lg:items-stretch xl:justify-start xl:items-stretch gap-5 bg-white border rounded-lg w-[75%] sm:md:h-[40rem] lg:xl:h-60 px-4 pb-4 mt-10">
      <div className="absolute left-[2rem] xl:lg:left-[11rem] mt-10 xl:lg:mt-8 rounded-full border bg-white h-8 w-8 flex items-center justify-center text-black">
        {number}
      </div>
      {highlight && (
        <div className="absolute left-[3rem] xl:lg:left-[12rem] mb-5">
          <button className="justify-center whitespace-nowrap text-sm font-medium transition-colors h-7 bg-[#ff6f00] text-white px-2 py-2 rounded-r-md flex items-center space-x-2">
            <img src={icon} alt="Icon" />
            <span>{highlightText}</span>
          </button>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-2 w-[12rem]">
        <div className="relative mt-9">
          <img src="/download3.png" alt="just text" />
        </div>
        <h3 className="text-xs md:text-sm mb-1 text-center">{name}</h3>
      </div>
      <div className="text-sm md:text-base flex flex-col gap-2 justify-between items-start xl:lg:pt-5 w-[80%] md:w-[60%]">
        <p>
          <b>{boldText}</b>
          {text}
        </p>
        <div className="mt-5">
          <h3 className="font-bold">Main highlights</h3>
          <p className="md:pl-4 mt-2">[What You Get]: {what_you_get}</p>
        </div>
        <button className="text-[#1B88F4] flex items-center">
          Show more
          <svg
            className="fill-current w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-between w-[17rem] items-center gap-5">
        <div className=" bg-[#F3F9FF] text-[#074786] border rounded-b-lg flex flex-col items-center p-5 w-[85%] md:w-[50%]">
          <h1 className="text-3xl">{rating}</h1>
          <h3>{remark}</h3>
          <img src={remark_icon} alt="" />
        </div>
        <button className="bg-[#1B88F4] text-white h-10 border rounded-lg w-[85%]">
          View
        </button>
      </div>
    </div>
  );
};

export default Module;
