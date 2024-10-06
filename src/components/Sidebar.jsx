import { TfiBarChartAlt } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { GiBrokenShield } from "react-icons/gi";

import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";

import { useState } from "react";

export default function Sidebar({ onSelectKey }) {
  const [isOpenSites, setIsOpenSites] = useState(false);
  const [isProtectionOpenDropdown, setIsProtectionDropdown] = useState(false);
  const [sitesDropValue, setSitesDropValue] = useState(0);

  const toggleDropdownSites = () => {
    setIsOpenSites(!isOpenSites);
    setIsProtectionDropdown(false);
  };

  const toogleOtherComponents = () => {
    setSitesDropValue(0);
    setIsOpenSites(false);
  };

  const toggleDropdownProtection = () => {
    setIsProtectionDropdown(!isProtectionOpenDropdown);
    setSitesDropValue(0);
    setIsOpenSites(false);
  };


  return (
    <>
      <div className="w-52 h-full p-4 relative overflow-hidden">
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727740800&semt=ais_hybrid"
            alt="logo"
            className="w-6 h-6"
          />
          <h1 className="text-xl font-bold">SafeLine WAF</h1>
        </div>

        <div className="flex flex-col mt-6 gap-1">
          <a
            href="#"
            className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md p-4 ease-in duration-100"
            onClick={() => {toogleOtherComponents(); onSelectKey("dashboard");}} 
          >
            <TfiBarChartAlt />
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md p-4 ease-in duration-100"
            onClick={toogleOtherComponents}
          >
            <GrNotes />
            <span>Events</span>
          </a>
          

          {/* Sites Dropdown */}
          <button
            type="button"
            className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md p-4 ease-in duration-100"
            onClick={toggleDropdownSites}
          >
            <div className="flex items-center gap-3" onClick={() => {onSelectKey("site");}} >
              <IoShieldCheckmarkOutline />
              <span>Sites</span>
            </div>
            <div>{isOpenSites ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
          </button>

          <div
            className={`overflow-hidden ease-in-out duration-500 ${
              isOpenSites ? "max-h-40" : "max-h-0"
            }`} onClick={() => {onSelectKey("site");}}
          >
            <div className={`flex flex-col gap-2 p-4`}>
              <a
                href="#"
                className="flex items-center gap-4 ease-in duration-100"
                role="sites-item"
                onClick={() => setSitesDropValue(1)}
              >
                {sitesDropValue === 1 ? (
                  <>
                    <GoDotFill className="text-sea-green-p" />
                    <span className="font-bold">Website</span>
                  </>
                ) : (
                  <>
                    <LuDot />
                    <span className="text-gray-500">Website</span>
                  </>
                )}
              </a>

              <a
                href="#"
                className="flex items-center gap-4 ease-in duration-100"
                role="sites-item"
                onClick={() => setSitesDropValue(2)}
              >
                {sitesDropValue === 2 ? (
                  <>
                    <GoDotFill className="text-sea-green-p" />
                    <span className="font-bold">SSL Cert</span>
                  </>
                ) : (
                  <>
                    <LuDot />
                    <span className="text-gray-500">SSL Cert</span>
                  </>
                )}
              </a>

              <a
                href="#"
                className="flex items-center gap-4 ease-in duration-100"
                role="sites-item"
                onClick={() => setSitesDropValue(3)}
              >
                {sitesDropValue === 3 ? (
                  <>
                    <GoDotFill className="text-sea-green-p" />
                    <span className="font-bold">Proxy Setting</span>
                  </>
                ) : (
                  <>
                    <LuDot />
                    <span className="text-gray-500">Proxy Setting</span>
                  </>
                )}
              </a>
            </div>
          </div>

          {/* Protection Dropdown */}
          <button
            type="button"
            className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md p-4 ease-in duration-100"
            onClick={toggleDropdownProtection}
          >
            <div className="flex items-center gap-3">
              <LiaToolsSolid />
              <span>Protections</span>
            </div>
            <div>
              {isProtectionOpenDropdown ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
          </button>
            

          <a
            href="#"
            className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md p-4 ease-in duration-100"
            onClick={toogleOtherComponents}
          >
            <IoSettingsOutline />
            <span>System</span>
          </a>
        </div>


        {/* Bottom Section */}
        <div className="absolute bottom-0 mb-4 flex flex-col gap-1 w-inherit">
          <span className="bg-white ml-4 rounded-full px-2 courier-prime-regular cursor-default">Version 5.0.0</span>
          <div className="flex flex-col mt-1 gap-1">
            <a
              href="#"
              className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md px-4 py-2 ease-in duration-100"
              onClick={toogleOtherComponents}
            >
              <GiBrokenShield />
              <span>Homepage</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 w-full focus:bg-sea-green-p focus:text-white hover:bg-sea-green-p hover:text-white rounded-md px-4 py-2 ease-in duration-100"
              onClick={toogleOtherComponents}
            >
              <CgNotes />
              <span>Documentation</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
