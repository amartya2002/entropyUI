import { FaChevronRight, FaCircle } from "react-icons/fa";
import Link from "next/link";
function Hero() {
  return (
    <section className=" mt-24 mx-6 md:mx-20 ">
      <div className=" space-y-1 max-w-xl tracking-tighter text-dark ">
        <p className="text-5xl md:text-6xl   font-bold ">Build faster</p>

        <p className="text-5xl md:text-6xl font-bold text-dark ">
          Build better
        </p>

        {/* <p className="text-5xl md:text-6xl  font-bold  text-white bg-gradient-to-r from-red-400  to-indigo-400 inline-block">Beautifully</p> */}

        <h1 className=" flex items-center bg-gradient-to-r from-red-400 via-indigo-400 to-orange-400 text-transparent bg-clip-text text-5xl font-bold md:text-6xl animate-text   ">
          Build Beautiful...{" "}
        </h1>
        {/* <FaCircle className=" mt-6 text-dark h-3"/> */}
        <p className="pt-   tracking-normal text-xl text-silver ">
          
          Accessible, responsive UI components designed using Tailwind CSS for your next React web app.
        </p>

        <div className="pt-4 flex space-x-4">
          <Link
            href="docs"
            className="flex items-center  bg-black text-slate-200 py-2 px-5 rounded-md text-lg hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold"
          >
            Get Started{" "}
            <FaChevronRight className="ml-2 h-3 text-slate-200 font-light w-3 "/> 
          </Link>
          <Link
            href="https://nextra.site/docs"
            target="_blank"
            className="flex items-center  bg-slate-100 border text-dark py-2 px-5 rounded-md text-lg hover:bg-slate-200 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold"
          >
            $ npm i entropyUI{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
