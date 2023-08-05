import React from "react";

function Navbar() {
  return (
    <div className="mb-14">
      <nav className="bg-[#f6f6eb] flex md:justify-around w-full md:p-4 justify-center ">
        <ul className=" md:gap-8 text-[#381fd1] md:font-semibold md:items-center uppercase text-sm md:flex my-4">
          <logo className="@ cursor-pointer hover:text-[#7666e0] justify-center flex mb-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z"
                fill="currentColor"
              ></path>
            </svg>
          </logo>
          <div className="flex md:gap-8 gap-6">
            <li className="hover:border-[#381fd1] rounded-md border-transparent border-2 p-1 cursor-pointer transition duration-700 ">
              product
            </li>
            <li className="hover:border-[#381fd1] rounded-md border-transparent border-2 p-1 cursor-pointer transition duration-700">
              pricing
            </li>
            <li className="hover:border-[#381fd1] rounded-md border-transparent border-2 p-1 cursor-pointer transition duration-700">
              blog
            </li>
            <li className="hover:border-[#381fd1] rounded-md border-transparent border-2 p-1 cursor-pointer transition duration-700 hidden md:flex">
              library
            </li>
            <li className="hover:border-[#381fd1] rounded-md border-transparent border-2 p-1 cursor-pointer transition duration-700 hidden md:flex">
              support
            </li>
            <li className="hover:border-[#381fd1] rounded-md border-transparent border-2 p-1 cursor-pointer transition duration-700 hidden md:flex">
              log in
            </li>
            <button className="bg-[#381fd1] text-white rounded-md p-2 hover:bg-[#8779e3] hidden md:flex">
              30-day free team trial
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
