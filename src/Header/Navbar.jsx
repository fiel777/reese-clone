import { React, useState } from "react";
import { HiArrowDownRight, HiOutlineBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Navbar() {
  const [bar, setBar] = useState(false);
  const [apparel, setApparel] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [otherMerch, setOtherMerch] = useState(false);

  const apparelHandleclick = () => {
    accessories || otherMerch === true
      ? setAccessories(false) || setOtherMerch(false)
      : "";
  };
  const accessoriesHandleClick = () => {
    apparel || otherMerch === true
      ? setApparel(false) || setOtherMerch(false)
      : "";
  };
  const otherMechHandleClick = () => {
    apparel || accessories === true
      ? setApparel(false) || setAccessories(false)
      : "";
  };

  return (
    <>
      <div className="flex flex-col items-center w-full font-primary sm:flex sm:flex-col lg:max-w-screen-xl m-auto ">
        <div className="w-full   px-5 items-center flex flex-col sm:flex-row sm:justify-between lg:justify-center lg:flex-col ">
          <img
            src="https://shop.reeselansangan.com/wp-content/uploads/2021/05/reeselansangan-transparent-web-600x141.png"
            alt="logo"
            className="py-4 w-[400px] max-[425px]:py-20 sm:w-[300px] md:w-[500px] lg:w-[600px] "
          />
          <button
            onClick={() => setBar(!bar)}
            className="cursor-pointer text-xl sm:text-2xl lg:hidden  "
          >
            {bar ? <GrClose /> : <HiOutlineBars3 />}
          </button>

          <div className="hidden desktop-nav  lg:flex text-lg">
            <ul className="flex h-full cursor-pointer flex-wrap justify-center">
              <li className="py-4 px-5 transition hover:text-gray-400 ">
                Time Well Spent
              </li>
              <li className="py-4 px-5 transition hover:text-gray-400 ">Albums</li>

              <div className="flex items-center">
                <div className="relative group  ">
                  <div className="flex items-center gap-2 hover:text-slate-400  transition duration-300 px-5 ">
                    <li className="py-4">Apparel</li>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  <div className="absolute w-[230px] bg-white top-[60px] hidden group-hover:flex  ">
                    <ul className="w-full">
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Shirts
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Face Masks
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Pull  
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative group  ">
                  <div className="flex items-center gap-2 hover:text-slate-400  transition duration-300 px-5 ">
                    <li className="py-4">Accesories</li>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  <div className="absolute w-[230px] bg-white top-[60px] hidden group-hover:flex  ">
                    <ul className="w-full">
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Phone Cases
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Phone Grips
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Key Chains
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Pins
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative group  ">
                  <div className="flex items-center gap-2 hover:text-slate-400  transition duration-300 px-5 ">
                    <li className="py-4 ">Other Merch</li>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                  <div className="absolute w-[230px] bg-white top-[60px] hidden group-hover:flex  ">
                    <ul className="w-full">
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Photocards
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Stickers
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        PostCards
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Books
                      </li>
                      <li className="px-5 py-4 hover:text-slate-400  transition duration-300">
                        Zines
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <li className="py-4 px-5 transition hover:text-gray-400 ">
                Shop By Collection
              </li>
              <li className="py-4 h-full px-5 transition hover:text-gray-400 ">
                Unboxings
              </li>
            </ul>
          </div>
        </div>
        {bar ? (
          <div className="w-full bg-white/70 my-4 lg:hidden  ">
            <ul className="text-base">
              <li className="px-5 py-4 border border-[#ddd]">Home</li>
              <li className="px-5 py-4 border-b border-[#ddd]">Albums</li>
              <div className="w-full border-b border-[#ddd]">
                <div
                  className="flex justify-between "
                  onClick={() => setApparel(!apparel) || apparelHandleclick()}
                >
                  <li className="px-5 py-4  ">Apparel</li>
                  <button className="text-xl- p-4">
                    {apparel ? (
                      <MdOutlineKeyboardArrowDown />
                    ) : (
                      <MdOutlineKeyboardArrowUp />
                    )}
                  </button>
                </div>

                {apparel ? (
                  <ul className="block">
                    <div className="flex  w-full items-center px-8 gap-2 border border-[#ddd]   ">
                      <span>
                        <MdOutlineKeyboardArrowRight />
                      </span>
                      <li className=" w-full py-4 ">Shirts</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2 border-b border-[#ddd]    ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">FaceMasks </li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Pull Overs </li>
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className="w-full border-b border-[#ddd]">
                <div
                  className="flex justify-between "
                  onClick={() =>
                    setAccessories(!accessories) || accessoriesHandleClick()
                  }
                >
                  <li className="px-5 py-4  ">Accessories</li>
                  <button className="text-xl- p-4">
                    {accessories ? (
                      <MdOutlineKeyboardArrowDown />
                    ) : (
                      <MdOutlineKeyboardArrowUp />
                    )}
                  </button>
                </div>

                {accessories ? (
                  <ul className="block">
                    <div className="flex  w-full items-center px-8 gap-2 border border-[#ddd]   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Phone Cases</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2 border-b border-[#ddd]    ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Phone Grips </li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2 border-b border-[#ddd]   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Keychains</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Pins</li>
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className="w-full border-b border-[#ddd]">
                <div
                  className="flex justify-between "
                  onClick={() =>
                    setOtherMerch(!otherMerch) || otherMechHandleClick()
                  }
                >
                  <li className="px-5 py-4  ">Other Merch</li>
                  <button className="text-xl- p-4">
                    {otherMerch ? (
                      <MdOutlineKeyboardArrowDown />
                    ) : (
                      <MdOutlineKeyboardArrowUp />
                    )}
                  </button>
                </div>
                {otherMerch ? (
                  <ul className="block">
                    <div className="flex  w-full items-center px-8 gap-2 border border-[#ddd]   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Photo Cards</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2 border-b border-[#ddd]    ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Stickers</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2 border-b border-[#ddd]    ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Postcards</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2 border-b border-[#ddd]   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Books</li>
                    </div>
                    <div className="flex  w-full items-center px-8 gap-2   ">
                      <span>
                        <MdOutlineKeyboardArrowRight className="" />
                      </span>
                      <li className=" w-full py-4 ">Zines</li>
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <li className="px-5 py-4 border-b border-[#ddd]">
                Shop By Collection
              </li>
              <li className="px-5 py-4 border-b border-[#ddd]">Unboxings</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
