import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link [font-family:montmed]" href="#home">
          HOME
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link [font-family:montmed]" href="#about">
          ABOUT
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link [font-family:montmed]" href="#work">
          WORK
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link [font-family:montmed]" href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  );

}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto c-space max-w-7xl">

            <div className="flex items-center justify-between py-2 sm:py-0">

                <a
                    href="/"
                    className="[font-family:nebulax] text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                    HISHIRUSAI
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            
                    <img
                    src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                    className={`w-6 h-6 transition-all duration-200 ${isOpen ? "rotate-90 opacity-100" : "rotate-0 opacity-90"}`}
                    alt="toggle"/>
                </button>

                <nav className="hidden sm:flex">
                    <Navigation />
                </nav>

            </div>
        </div>

        <motion.div
            className={`overflow-hidden text-center sm:hidden transition-[max-height] duration-300 ease-out`}
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -8 }}
            transition={{ duration: 1 }}
            style={{ maxHeight: isOpen ? "100vh" : 0, pointerEvents: isOpen ? "auto" : "none" }}>

        <nav className="pb-5">
          <Navigation />
        </nav>

      </motion.div>
      
    </div>
  );
};

export default Navbar;
