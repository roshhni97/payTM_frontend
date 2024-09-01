const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between border rounded-lg mb-4">
      <div className="flex flex-col justify-center items-center h-full ml-4">
        PayTM App
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center items-center mr-4">
          <div className="flex flex-col justify-center h-full text-lg">U</div>
        </div>
      </div>
    </div>
  );
};
export default Appbar;
