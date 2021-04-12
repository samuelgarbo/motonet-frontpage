import { useState } from "react";
import tw, { css } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import { menuList, navCategories } from "../../data";

const stylesList = ({ selected }) => [
  tw`flex justify-center absolute top-136px p-0 left-0 right-0 max-h-0  bg-white overflow-hidden`,
  selected &&
    tw` max-h-100vh p-3 border-l border-b border-r border-black z-10 cursor-default transition-maxHeight duration-300`,
];
const stylesNavBar = ({ selected, first }) => [
  tw`flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-white hover:text-gray-800  cursor-pointer`,
  selected && tw`bg-white text-gray-800`,
  first && tw`border-l`,
];
export default function NavBar() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const handleSelect = (num) => {
    setSelected(num);
    setOpen(true);
  };
  const handleUnselect = (num) => {
    setSelected(null);
    setOpen(false);
  };
  console.log("IN the navbar");
  return (
    <>
      <nav tw="flex bg-gray-800 h-7 justify-center">
        {navCategories.map((category, idx, arr) => {
          if (idx === 0) {
            return (
              <div key={idx} css={stylesNavBar({ first: true })}>
                {category}
              </div>
            );
          } else if (idx === arr.length - 1) {
            return (
              <div key={idx} css={stylesNavBar({})}>
                {category}
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                css={stylesNavBar({ selected: selected === idx })}
                onClick={() => handleSelect(idx)}
                onMouseLeave={() => handleUnselect(idx)}
              >
                {category}
                <div css={stylesList({ selected: selected === idx })}>
                  {menuList[idx].map((el, menuIdx) => {
                    return (
                      <div key={menuIdx} tw="w-56 flex flex-col">
                        <div
                          key={menuIdx}
                          tw="text-gray-navText text-xs font-semibold capitalize my-1"
                        >
                          <span tw="hover:underline cursor-pointer">
                            {el.title}
                          </span>
                        </div>
                        <ul tw="flex-grow">
                          {el.list.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              tw="text-gray-navText text-xs font-normal capitalize my-0.5"
                            >
                              <span tw=" hover:underline cursor-pointer">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div tw="font-bold normal-case">
                          <span tw="flex items-center cursor-pointer">
                            Katso kaikki
                            <FontAwesomeIcon
                              icon={faAngleDoubleRight}
                              tw="inline-block text-black h-3 w-3 ml-1"
                            ></FontAwesomeIcon>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </nav>
    </>
  );
}
