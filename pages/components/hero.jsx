import { FaChevronRight, FaCircle, FaCopy } from "react-icons/fa";
import Link from "next/link";
function Hero() {
  return (
    <section className="mt-24 px-6 max-w-7xl mx-auto">
      <div className="text-5xl sm:text-6xl font-bold text-dark transition-all duration-300 tracking-tighter space-y-1 mb-4">
        <p>Build faster</p>
        <p>Build better</p>
        <h1 className="flex items-center bg-gradient-to-r from-red-400 via-indigo-400 to-orange-400 text-transparent bg-clip-text animate-text transition-all duration-300 ">
          Build Beautiful
        </h1>
        <p className="mt-2 mx-1 tracking-normal text-xl text-slate-500 font-normal max-w-xl ">
          Accessible, responsive UI components designed using Tailwind CSS for
          your next React web app.
        </p>
      </div>

      <div className=" sm:flex my-3  sm:space-x-2 mb-10">
        <Link
          href="docs"
          className="   flex  justify-center sm:w-60 items-center bg-black text-slate-200 py-2 px-7 rounded-md  hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold shadow-md "
        >
          Get Started{" "}
          <FaChevronRight className=" ml-2 h-3 text-slate-200 font-light w-3" />
        </Link>

        <Link
          href=""
          className="  mt-4 sm:mt-0 flex py-1 px-7  justify-center border sm:w-60 items-center  text-slate-400  rounded-md  hover:text-blue-400 hover:scale-101 active:scale-105 duration-150 tracking-normal font-semibold  "
        >
          $ npm i entropyUI
          <FaCopy className=" ml-2 h-3  font-light w-3" />
        </Link>
      </div>

      <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0 mb-10">
  <div className="bg-black text-white px-7 py-8 sm:py-8 rounded-3xl max-w-2xl shadow-xl flex-1">
    <h2 className="text-2xl font-semibold mb-2">Responsive</h2>
    <p className="text-slate-200">
      Responsive designed components and templates that look great on mobile,
      tablet, and desktop.
    </p>
  </div>

  <div className="bg-black text-white px-7 py-8 sm:py-10 rounded-3xl max-w-2xl shadow-xl flex-1">
    <h2 className="text-2xl font-semibold mb-2">Accessible</h2>
    <p className="text-slate-200">
      Building websites that can be used by all individuals is one of our
      highest priorities.
    </p>
  </div>

  <div className="bg-black text-white px-7 py-6 sm:py-0 sm:pb-0 rounded-3xl shadow-xl flex justify-center items-center text-center">
    <p className="text-xl">Dark Mode<br />Included</p>
  </div>
</div>


    </section>
  );
}
export default Hero;













{
  /* <Link
            href="docs"
            className="text-center flex items-center bg-black text-slate-200 py-2 px-5 rounded-md text-base md:text-lg hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold whitespace-nowrap"
          >
            Get Started
            <FaChevronRight className="ml-2 h-3 text-slate-200 font-light w-3" />
          </Link> */
}

{
  /* <p className="text-5xl md:text-6xl  font-bold  text-white bg-gradient-to-r from-red-400  to-indigo-400 inline-block">Beautifully</p> */
}

{
  /* <div className="pt-4 mx-auto  space-x-4">
          <Link
            href="docs"
            className="text-center flex items-center bg-black text-slate-200 py-2 px-5 rounded-md text-base md:text-lg hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold whitespace-nowrap"
          >
            Get Started
            <FaChevronRight className="ml-2 h-3 text-slate-200 font-light w-3" />
          </Link>

          <Link
            href="https://nextra.site/docs"
            target="_blank"
            className="flex items-center bg-slate-100 border text-dark py-2 px-5 rounded-md text-lg hover:bg-slate-200 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold"
          >
            $ npm i entropyUI
          </Link>
        </div> */
}
