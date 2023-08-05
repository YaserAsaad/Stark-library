import React from "react";

function Main() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col mb-6 mx-4">
          <h1 className="text-xl md:text-5xl font-bold text-[#11284b]">
            New in the Library
          </h1>
          <h2 className="md:text-xl text-sm  ">
            Newly added accessibility resources, guides, and more.
          </h2>
        </div>
        <a className="underline text-blue-800 cursor-pointer uppercase md:font-bold hidden md:flex">
          View ALl
        </a>
      </div>
      {/* Cards too */}
      <div className="grid grid-cols-1 list-none gap-8 mb-14 sm:grid-cols-2 md:grid-cols-3">
        <li className="">
          <div className="justify-center flex w-[16rem] h-[12rem] flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md border hover:border-gray-500 cursor-pointer ">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                USA
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-blue-900">
                Make America Great Again!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="justify-center flex w-[16rem] h-[12rem] flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md border hover:border-gray-500 cursor-pointer">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                USA
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-blue-900 ">
                Make America Great Again!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="justify-center flex w-[16rem] h-[12rem] flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md border hover:border-gray-500 cursor-pointer">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                USA
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-blue-900">
                Make America Great Again!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="justify-center flex w-[16rem] h-[12rem] flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md border hover:border-gray-500 cursor-pointer">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                USA
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-blue-900">
                Make America Great Again!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="justify-center flex w-[16rem] h-[12rem] flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md border hover:border-gray-500 cursor-pointer">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                USA
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-blue-900">
                Make America Great Again!
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="justify-center flex w-[16rem] h-[12rem] flex-col rounded-xl bg-white bg-clip-border text-gray-900 shadow-md border hover:border-gray-500 cursor-pointer ">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-800 antialiased">
                USA
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-blue-900">
                Make America Great Again!
              </p>
            </div>
          </div>
        </li>
      </div>
      {/* FEATURES now */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col mb-6 md:mx-0 mx-auto">
          <h1 className="md:text-5xl text-xl font-bold text-[#11284b]">
            Featured Collections
          </h1>
          <h2 className="md:text-xl text-sm ">
            Handpicked and curated collections around accessibility.
          </h2>
        </div>
        <a className="underline text-blue-800 cursor-pointer uppercase font-bold hidden md:flex">
          View ALl
        </a>
      </div>

      {/* here we goooooooooooooooooooooooooooooo */}
      <div className="md:flex md:justify-around md:mx-0 mx-auto ">
        <div className="relative h-[24rem] w-full max-w-[14rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 md:mb-0 mb-8">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12 cursor-pointer hover:bg-gray-600">
            <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              How we design and code open-source projects?
            </h2>
            <h5 className="mb-4 block font-sans text-md font-semibold leading-snug tracking-normal text-green-400 antialiased">
              Andrew Tate
            </h5>
            <img
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-[74px] w-[72px] rounded-full border-2 border-white object-cover object-center"
            />
          </div>
        </div>
        <div className="relative grid h-[24rem] w-full max-w-[14rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 md:mb-0 mb-8">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12 cursor-pointer hover:bg-gray-600">
            <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              How we design and code open-source projects?
            </h2>
            <h5 class="mb-4 block font-sans text-md font-semibold leading-snug tracking-normal text-green-400 antialiased">
              Andrew Tate
            </h5>
            <img
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-[74px] w-[72px] rounded-full border-2 border-white object-cover object-center"
            />
          </div>
        </div>
        <div className="relative grid h-[24rem] w-full max-w-[14rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12 cursor-pointer hover:bg-gray-600">
            <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              How we design and code open-source projects?
            </h2>
            <h5 className="mb-4 block font-sans text-md font-semibold leading-snug tracking-normal text-green-400 antialiased">
              Andrew Tate
            </h5>
            <img
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-[74px] w-[72px] rounded-full border-2 border-white object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
