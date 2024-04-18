export const Calculator = () => {
  return (
    <div className="">
      {/* top-bar */}
      <div></div>
      {/* content */}
      <div className="grid grid-rows-4 grid-cols-4 gap-1 h-[30vh] bg-gray-200 p-1">
        <div className="flex justify-center items-center place-self-stretch bg-white">1</div>
        <div className="flex justify-center items-center bg-white">2</div>
        <div className="flex justify-center items-center bg-white">3</div>
        <div className="row-span-2 flex justify-center items-center bg-white">清空</div>
        <div className="flex justify-center items-center bg-white">4</div>
        <div className="flex justify-center items-center bg-white">5</div>
        <div className="flex justify-center items-center bg-white">6</div>
        <div className="flex justify-center items-center bg-white">7</div>
        <div className="flex justify-center items-center bg-white">8</div>
        <div className="flex justify-center items-center bg-white">9</div>
        <div className="row-span-2 flex justify-center items-center bg-white">提交</div>
        <div className="col-span-2 flex justify-center items-center bg-white">0</div>
        <div className="flex justify-center items-center bg-white">.</div>
      </div>
    </div>
  )
}
