import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownMenu = ({ title, items, onItemClick }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative list-none">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-1 text-base duration-300 hover:text-blue-800 cursor-pointer"
      >
        {title} <FaAngleDown />
      </button>

      {open && (
        <div
          className={`${
            window.innerWidth >= 1024
              ? "absolute bg-white w-[270px] top-9 left-1/2 -translate-x-1/2 border-t-2 border-t-blue-500 border-b-4 border-b-blue-500 rounded-md shadow-md"
              : ""
          } py-1 text-left z-50 list-none`}
        >
          {items.map((item, i) => (
            <div key={i} className="list-none">
              <Link
                to={item.href}
                onClick={() => {
                  setOpen(false);
                  onItemClick?.(); // mobile menu বন্ধ করার জন্য call
                }}
                className="block w-full py-3 px-6 duration-300 text-blue-950 hover:text-blue-800 hover:bg-gray-100"
              >
                {item.label}
              </Link>
              {i !== items.length - 1 && (
                <hr className="border border-gray-200" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
