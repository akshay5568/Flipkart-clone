function NotFound() {
  return (
    <div className="w-full h-fit bg-[#f1f3f6] pt-4">
      <div className="w-[80%] h-[23rem] bg-[#ffffff]  mt-8 m-auto  shadow-lg shadow-white-250/2">
        <h1 className="text-center pt-15 text-2xl">404 Page Not Found</h1>
        <h1 className="text-center text-xs mt-3">This Page does not exist</h1>
      </div>

      <hr className="mt-5 text-[#dddddd]" />
      <div className="w-full h-[22rem] bg-[#f1f3f6]"></div>
    </div>
  );
}

export default NotFound;
