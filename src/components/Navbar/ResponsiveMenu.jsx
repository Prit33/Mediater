import React , {useState} from "react";
import FormPopup from "./FormPopup";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  // console.log("showMenu", showMenu);
  const [showForm, setShowForm]= useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleForm =()=>{
    setShowForm(!showForm);
    setIsPopupOpen(!isPopupOpen)
  }
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <img src="https://d1yei2z3i6k35z.cloudfront.net/5927876/65735da0d7017_Group21.png" alt="Company-Logo" className="w-10" />
          {/* <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div> */}
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}

            <button
                onClick={toggleForm}
                className="py-2 px-5 bg-sky-500 text-white font-semibold rounded-full shadow-md hover:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-opacity-75"
              >
            Contact Us
            </button>

            {showForm && 
              <FormPopup isOpen={isPopupOpen} onClose={toggleForm} />}
          </ul>
        </nav>
      </div>
      <div className="footer text-gray-400">
        <h1>
          Mediater © 2024
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
