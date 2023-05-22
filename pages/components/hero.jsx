import { FaChevronRight, FaCircle, FaCopy } from "react-icons/fa";
import Link from "next/link";
function Hero() {
  return (
    <section className="mt-24 px-10 max-w-7xl mx-auto">
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
          className="   flex  justify-center sm:w-60 items-center bg-black text-slate-200 py-2 px-7 rounded-full sm:rounded-md  hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 tracking-normal font-semibold shadow-xl "
        >
          Get Started{" "}
          <FaChevronRight className=" ml-2 h-3 text-slate-200 font-light w-3" />
        </Link>

        <Link
          href=""
          className="  mt-4 sm:mt-0 flex py-1 px-7  justify-center border sm:w-60 items-center  text-slate-400    hover:text-blue-400 hover:scale-101 active:scale-105 duration-150 tracking-normal font-semibold rounded-full sm:rounded-md  "
        >
          $ npm i entropyUI
          <FaCopy className=" ml-2 h-3  font-light w-3" />
        </Link>
      </div>

     



 {/* Responsive, Accessible, Darkmode Cards*/}

 <div className="sm:flex sm:space-x-4 space-y-7 sm:space-y-0 mb-10">
        {/* Card1*/}
        <div className="bg-gradient-to-l from-[#dc8585] to-[#f25d5d] text-white px-7 py-8 sm:py-6  rounded-3xl sm:max-w-lg shadow-xl flex-1  ">
          <div className=" mb-12  ">
            <h2 className="text-2xl font-semibold mb-2">Responsive</h2>
            <p className="text-slate-200">
              Responsive designed components and templates that look great on
              mobile, tablet, and desktop. look great on mobile, tablet, and
              desktop.
            </p>
          </div>
        </div>
        {/* Card2*/}
        <div className="bg-gradient-to-l from-[#dc8585] to-[#f25d5d] text-white px-7 py-8 sm:py-6 rounded-3xl sm:max-w-lg shadow-xl flex-1 ">
          <div className=" mb-10">
            <h2 className="text-2xl font-semibold mb-2">Accessible</h2>
            <p className="text-slate-200">
              Building websites that can be used by all individuals is one of
              our highest priorities.
            </p>
          </div>
        </div>
        {/* Card3*/}
        <div className="bg-gradient-to-r from-[#000000]  to-[#575555]  text-white px-7 py-6 sm:py-0 sm:pb-0 rounded-3xl shadow-xl flex justify-center items-center text-center animate-text">
          <p className="text-xl">
            Dark Mode
            <br />
            Included
          </p>
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



 {/* Responsive, Accessible, Darkmode Cards*/}

 <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0 mb-10">
 {/* Card1*/}
 <div className="bg-gradient-to-l from-[#3A3A3A] to-[#040404] text-white px-7 py-8 sm:py-6  rounded-3xl sm:max-w-lg shadow-md flex-1  ">
   <div className=" mb-12  ">
     <h2 className="text-2xl font-semibold mb-2">Responsive</h2>
     <p className="text-slate-200">
       Responsive designed components and templates that look great on
       mobile, tablet, and desktop. look great on mobile, tablet, and
       desktop. 
     </p>
   </div>
 </div>
 {/* Card2*/}
 <div className="bg-gradient-to-l from-[#3A3A3A] to-[#040404] text-white px-7 py-8 sm:py-6 rounded-3xl sm:max-w-lg shadow-md flex-1  border border-lightSilver">
   <div className=" mb-10">
     <h2 className="text-2xl font-semibold mb-2">Accessible</h2>
     <p className="text-slate-200">
       Building websites that can be used by all individuals is one of
       our highest priorities.
     </p>
   </div>
 </div>
 {/* Card3*/}
 <div className="bg-gradient-to-r from-[#000000]  to-[#575555]  text-white px-7 py-6 sm:py-0 sm:pb-0 rounded-3xl shadow-md flex justify-center items-center text-center border border-lightSilver animate-text">
   <p className="text-xl">
     Dark Mode
     <br />
     Included
   </p>
 </div>
</div>