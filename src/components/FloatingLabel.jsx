import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FloatingLabel = ({ label, type, name, options = [], setOptions }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (options && options.length === 0) {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          const countryNames = data
            .map((country) => country.name.common)
            .sort();
          setOptions(countryNames);
        })
        .catch((error) => console.error("Error fetching countries:", error));
    }
  }, [options, setOptions]);

  return (
    <div className="relative shadow-md group bg-transparent border border-gray-300 rounded-sm px-3 pt-4 pb-1 focus-within:border-gray-500 transition-all">
      {/* Label */}
      <label
        className={`absolute left-3 transition-all text-[#303030] duration-200 ease-in pointer-events-none ${
          isFocused || value
            ? "text-xs translate-y-[-110%] opacity-100 font-semibold"
            : "top-5 opacity-70"
        }`}
      >
        {label}
      </label>

      {/* Select Input with Custom Icons */}
      {type === "select" ? (
        <div className="relative">
          <select
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent pb-2 text-sm focus:outline-none appearance-none pr-8"
          >
            <option value="" disabled hidden></option>
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Custom Arrow Icons */}
          <div className="absolute group right-3 top-1/2  transform -translate-y-1/2 flex flex-col items-center">
            <FaChevronUp className="text-gray-400 group-hover:text-[#6bbf4f]  cursor-pointer transition-colors duration-200" />
            <FaChevronDown className="text-gray-400 group-hover:text-[#6bbf4f] cursor-pointer transition-colors duration-200" />
          </div>
        </div>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          rows="4"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent pb-2 text-sm focus:outline-none resize-none pt-5"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-sm pb-2 focus:outline-none"
        />
      )}
    </div>
  );
};

export default FloatingLabel;
