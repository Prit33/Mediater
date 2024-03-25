import React, { useState, useRef } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import FormPopup from "./FormPopup";
import CoLogo from "../../assets/website/company-logo.png";

export const MenuLinks = [
  {
    id: 1,
    name: "Mission",
    link: "/#mission",
  },
  {
    id: 2,
    name: "Testimonial",
    link: "/#testimonial",
  },
];



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm]= useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleForm =()=>{
    setShowForm(!showForm);
    setIsPopupOpen(!isPopupOpen)
  }
  return (
    <div
      className="bg-sky-100 relative z-10 w-full dark:bg-slate-800 dark:text-white duration-300"
    >
      <div className="container py-3 md:py-2 ">
        <div className=" flex justify-between items-center">
          {/* Logo section */}
          <a target="_blank" href="" className="flex items-center gap-3" onClick={() => event.preventDefault()}>
            <img
              src={CoLogo}
              alt=""
              className="h-24 mt-5"
            />
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-sky-500 py-2  hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <button
                onClick={toggleForm}
                className="py-2 px-5 bg-sky-500 text-white font-semibold rounded-full shadow-md hover:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-75"
              >
                Contact us
              </button>
              {showForm && 
              <FormPopup isOpen={isPopupOpen} onClose={toggleForm} />}

              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
