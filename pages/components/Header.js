import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import TopBar from "./TopBar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <TopBar />
      <header tw="h-20 bg-red-primary flex items-center">
        <div tw="relative h-20 w-56 flex-shrink-0">
          <img
            src={"/header_logo.jpg"}
            tw="absolute left-0 top-0 w-full h-auto"
          />
        </div>
        <div tw="flex rounded-sm h-7 justify-start flex-grow pl-16">
          <span tw="inline-flex items-center px-3 rounded-l-sm border-gray-300 bg-gray-50 text-black hover:bg-gray-200 text-sm cursor-pointer">
            <FontAwesomeIcon
              icon={faSearch}
              tw="text-black h-5 w-5"
            ></FontAwesomeIcon>
          </span>
          <input
            type="text"
            name="company_website"
            tw="focus:outline-none  block rounded-none rounded-r-md sm:text-sm border-gray-300 px-3 w-112"
            placeholder="Löydä yli 150 000 tuotteen valikoimasta"
          />
        </div>
        <div tw="flex justify-center items-center mr-20 space-x-6">
          <span tw="flex text-white text-xs font-semibold uppercase cursor-pointer">
            Kirjaudu / Liity
          </span>
          <span tw="relative p-2">
            <FontAwesomeIcon
              icon={faShoppingCart}
              tw="text-white h-7 w-7 cursor-pointer"
            ></FontAwesomeIcon>
            <span tw="absolute top-0 -right-1 origin-top-right rounded-3xl border-black border bg-gray-200 text-black text-sm font-bold h-5 w-5 flex items-center justify-center cursor-pointer">
              0
            </span>
          </span>
        </div>
      </header>
      <NavBar />
    </>
  );
}
