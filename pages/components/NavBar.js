import React, { useState } from "react";
import tw, { css } from "twin.macro";

import MegaMenu from "./MegaMenu";
import { menuList, navCategories } from "../../data";

const stylesNavBar = ({ selected, first }) => [
  tw`flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-white hover:text-gray-800  cursor-pointer`,
  selected && tw`bg-white text-gray-800`,
  first && tw`border-l`,
];

export default function NavBar() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (num) => {
    setSelected(num);
  };
  const handleUnselect = () => {
    setSelected(null);
  };
  return (
    <>
      <nav>
        <div onMouseLeave={handleUnselect}>
          <div tw="flex bg-gray-800 h-7 justify-center">
            {navCategories.map((category, idx, arr) => {
              if (idx === 0) {
                return (
                  <div
                    key={idx}
                    css={stylesNavBar({ first: true })}
                    onMouseEnter={handleUnselect}
                  >
                    {category}
                  </div>
                );
              } else if (idx === arr.length - 1) {
                return (
                  <div
                    key={idx}
                    css={stylesNavBar({})}
                    onMouseEnter={handleUnselect}
                  >
                    {category}
                  </div>
                );
              } else {
                return (
                  <div
                    key={idx}
                    css={stylesNavBar({ selected: selected === idx })}
                    onMouseEnter={() => handleSelect(idx)}
                  >
                    {category}
                  </div>
                );
              }
            })}
          </div>
          <span onMouseLeave={handleUnselect}>
            <MegaMenu menuList={menuList} selected={selected} />
          </span>
        </div>
      </nav>
    </>
  );
}
