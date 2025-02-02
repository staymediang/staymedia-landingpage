import React, { useEffect, useState } from "react";

const FloatingLabel = ({ label, type, name, options = [], setOptions }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (options && options.length === 0) {
      // Fetch countries dynamically for select fields
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
            : "top-1/2 translate-y-[-50%] opacity-70"
        }`}
      >
        {label}
      </label>

      {/* Input Field */}
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-sm focus:outline-none"
        >
          <option value="" disabled hidden></option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          rows="4"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-sm focus:outline-none resize-none"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-sm focus:outline-none"
        />
      )}
    </div>
  );
};

export default FloatingLabel;
