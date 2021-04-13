import React, { useState } from "react";
import tw, { css } from "twin.macro";

import { memoizedMenu as MegaMenu } from "./MegaMenu";
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
  console.log("in NAVBAR");
  return (
    <>
      <nav tw="flex bg-gray-800 h-7 justify-center">
        <div css={stylesNavBar({ first: true })}>{navCategories[0]}</div>
        <MegaMenu
          category={navCategories[1]}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          idx={1}
          menuList={menuList}
          selected={selected}
        />
        <MegaMenu
          category={navCategories[2]}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          idx={2}
          menuList={menuList}
          selected={selected}
        />
        <MegaMenu
          category={navCategories[3]}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          idx={3}
          menuList={menuList}
          selected={selected}
        />
        <MegaMenu
          category={navCategories[4]}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          idx={4}
          menuList={menuList}
          selected={selected}
        />
        <MegaMenu
          category={navCategories[5]}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          idx={5}
          menuList={menuList}
          selected={selected}
        />
        <MegaMenu
          category={navCategories[6]}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          idx={6}
          menuList={menuList}
          selected={selected}
        />
        <div css={stylesNavBar({})}>{navCategories[7]}</div>
        {/* {navCategories.map((category, idx, arr) => {
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
              <MegaMenu
                key={idx}
                category={category}
                handleSelect={handleSelect}
                handleUnselect={handleUnselect}
                idx={idx}
                menuList={menuList}
                selected={selected}
              />
            );
          }
        })} */}
      </nav>
    </>
  );
}
