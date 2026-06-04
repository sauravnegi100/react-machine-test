import React, { useState } from "react";
import toast from "react-hot-toast";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <section className="">
      <article className="flex flex-col items-center gap-10 bg-white w-150 m-auto mt-20 p-10 rounded-md shadow-[1px_1px_10px]">
        <h1 className="text-3xl font-bold underline text-gray-700">
          Counter App
        </h1>
        <div className="font-bold text-6xl bg-blue-400 py-2 px-6 rounded-md text-[#eee] ">
          Count : <span className="text-[crimson]">{count}</span>
        </div>
        <div className=" flex flex-col items-center gap-5">
          <section className="flex gap-10">
            {" "}
            <button
              onClick={() =>
                count > 0
                  ? setCount(count - 1)
                  : toast.error("Counter can't go below 0 ... !!")
              }
              className=" bg-[crimson] w-15 py-1 rounded-md shadow-2xl text-white font-bold text-5xl hover:scale-101 transition-all hover:bg-[#c40b30]"
            >
              -
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-400 w-15 py-1 rounded-md shadow-2xl text-white font-bold text-5xl hover:scale-101 transition-all hover:bg-green-500"
            ><span>+</span>
              
            </button>
          </section>
          <button
            onClick={() => setCount(0)}
            className="bg-amber-300 px-8 py-1 rounded-md shadow-2xl font-bold text-3xl hover:scale-101 transition-all hover:bg-amber-400"
          >
            reset
          </button>
        </div>
      </article>
    </section>
  );
};

export default Counter;
