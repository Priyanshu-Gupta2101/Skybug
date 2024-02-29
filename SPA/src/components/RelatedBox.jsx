const RelatedBox = () => {
  return (
    <div
      className="border text-card-foreground w-[350px] bg-white rounded-lg shadow-md"
      data-v0-t="card"
    >
      <div className="flex-col space-y-1.5 relative p-4 flex justify-center items-center">
        <div className="mt-4">
          <img
            src="/download3.png"
            alt="Website builder preview"
            width="320"
            height="120"
            style={{ aspectRatio: 320 / 120, objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex space-x-2 mb-4">
          <div className="text-[#074786] inline-flex items-center rounded-md whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold bg-[#F2F4F7]">
            20% Off
          </div>
          <div className="text-[#074786] inline-flex items-center rounded-md whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold bg-[#F2F4F7]">
            Limited time
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-1 text-center">Webbuilder 1</h3>
        <p className="text-sm text-gray-600 mb-4">
          Computer Modern classic with wix support
        </p>
        <div className="flex items-baseline space-x-2 mb-6">
          <span className="text-xl font-semibold text-gray-700">$39.96</span>
          <span className="text-sm line-through text-gray-400">$49.96</span>
          <span className="text-sm text-red-600">(20% Off)</span>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-600 text-white">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default RelatedBox;
