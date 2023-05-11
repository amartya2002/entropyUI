import Link from "next/link";
import { FaBars, FaGithub, FaTwitter } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";



function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
     
      <section className="mb-10 ">
        <nav
          className="bg-white-200 fixed top-0 w-full z-21  border-b bg-opacity-75 backdrop-filter backdrop-blur-lg "
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <header className="flex justify-between items-center h-16 ">
              <div className="flex space-x-3 ">
                {/* <button
                  className="flex-shrink-0 hover:text-blue-500 -ml-2   active:scale-110 duration-200   "
                  onClick={() => {
                    setOpenSidebar(!openSidebar);
                  }}
                >
                  <HiArrowRightOnRectangle className="h-6 w-6 lg:hidden " />
                </button> */}

                <div className="flex-shrink-0  ">
                  <Link href="/">
                    
                    <p className="font-semibold text-xl bg-gradient-to-r from-slate-400 via-dark to-slate-400 text-transparent bg-clip-text  animate-text ">Entropy UI</p>
                  </Link>
                </div>
              </div>

              <nav
                className=" hidden md:block md:ml-16  text-center lg:ml-32"
                aria-label="Main menu"
              >
                <ul className="flex space-x-2  lg:space-x-4">
                  <li>
                    <Link
                      href="/"
                      className="text-silver px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500 "
                    >  
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-silver    px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500 "
                    >
                      Contribute
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      href="/"
                      className="text-silver    px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              
              <div className="hidden md:flex sm:items-center">
              <div className="flex space-x-3 text-xl  ">
              <Link href="/">
    <FaGithub className=""/>
    </Link>

    <Link href="/"><FaTwitter/></Link>
              </div>
                <div className="ml-3 relative">
                  <button className="text-white  px-4 py-2 rounded-full text-sm font-medium bg-black hover:scale-105 active:scale-110 duration-200  ">
                 
                    <Link href="/"> Get Started</Link>
                  </button>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="text-gray-700 hover:bg-slate-100 inline-flex items-center justify-center p-2 rounded-xl transition-all ease-in-out fade-in-enter fade-in-enter-active active:scale-110 duration-200 "
                  aria-label="Open main menu"
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                >
                  <FaBars className="h-5 w-6 " />
                </button>
              </div>
            </header>
          </div>
        </nav>
        {/* {openModal && <Modal />} header v1  */}
        {openModal && (
          <Modal closeModal={setOpenModal}  />
        )}
      </section>
    </>
  );
}

function Modal({ closeModal }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target )) {
        closeModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);
  return (
    <div className="absolute inset-0  backdrop-filter backdrop-blur-lg bg-opacity-30 " >
    <div
      className="fixed top-2.5 left-0 w-full h-[350px] flex animate-modal     "
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      ref={overlayRef}
      
    >
      <div className="bg-white rounded-lg shadow-md p-2 w-full mx-4 ">
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex space-x-3 ">
            

            <div className="flex-shrink-0  ">
              <Link href="/">
                
                <p className="font-medium text-xl ">Entropy UI</p>
              </Link>
            </div>
          </div>
          <button
            className=" mr-2  text-gray-600  hover:text-gray-800  "
            onClick={() => closeModal(false)}
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <ul className="font-semibold text-slate-800 divide-y divide-dashed">
            
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="/" className="text-slate-800 hover:text-slate-900">
                Contribute
              </Link>
              <p className="font-normal text-silver">
                Help us in building a meaningful product
              </p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="/" className="text-slate-800 hover:text-slate-900">
                About us
              </Link>
              <p className="font-normal text-silver">Discover who we are</p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="/" className="text-slate-800 hover:text-slate-900">
                Contact
              </Link>
              <p className="font-normal text-silver">Get in touch with us.</p>
            </li>
          </ul>
        </div>


        <div className="flex flex-col ">
  <button className="text-white px-4 py-2 rounded-full text-sm font-medium bg-black hover:scale-105 active:scale-110 duration-200">
    <Link href="/"> Get Started</Link>
  </button>
  <div className="flex space-x-3 text-xl justify-center align-middle mt-4 ">
    <Link href="/">
    <FaGithub className=""/>
    </Link>

    <Link href="/"><FaTwitter/></Link>
    
    
  </div>
</div>
        
        <div className="flex justify-center mt-36">
       
        </div>
      </div>
    </div>
    </div>
  );
}
export default Navbar;