import React from "react";
import tw, { css } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const stylesList = ({ selected }) => [
  tw`flex justify-center absolute top-136px p-0 left-0 right-0 max-h-0 cursor-default bg-white overflow-hidden z-10`,
  selected && tw` max-h-100vh p-3 border-l border-b border-r border-black `,
];
const stylesNavBar = ({ selected, first }) => [
  tw`flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-white hover:text-gray-800  cursor-pointer`,
  selected && tw`bg-white text-gray-800`,
  first && tw`border-l`,
];

function MegaMenu({
  category,
  handleSelect,
  handleUnselect,
  idx,
  menuList,
  selected,
}) {
  const handleClick = () => {
    handleSelect(idx);
  };
  const handleMouseLeave = () => {
    handleUnselect();
  };
  console.log("IN MEGAMENU");
  return (
    <div
      key={idx}
      css={stylesNavBar({ selected: selected === idx })}
      onMouseEnter={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {category}
      <div css={stylesList({ selected: selected === idx })}>
        {menuList[idx].map((el, menuIdx) => {
          return (
            <div key={menuIdx} tw="w-48 flex flex-col">
              <div
                key={menuIdx}
                tw="text-gray-navText text-xs font-semibold capitalize my-1"
              >
                <span tw="hover:underline cursor-pointer">{el.title}</span>
              </div>
              <ul tw="flex-grow">
                {el.list.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    tw="text-gray-navText text-xs font-normal capitalize my-0.5"
                  >
                    <span tw=" hover:underline cursor-pointer">{item}</span>
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
export const memoizedMenu = React.memo(MegaMenu);
