import tw, { css } from "twin.macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const stylesItem = ({ main, open }) => [
  tw`flex items-center justify-between bg-white border-b  text-gray-600 text-xs font-normal py-1 px-2 normal-case cursor-pointer`,
  main && tw`bg-gray-600 text-white`,
  open && main && tw`bg-red-primary `,
  open && !main && tw`bg-gray-200 font-bold`,
  !open && !main && tw`hover:bg-gray-100`,
];
const stylesSubItems = ({ open }) => [
  tw`overflow-hidden max-h-0 transition-maxHeight duration-300 ease-in-out`,
  open && tw`max-h-screen`,
];
const stylesContent = ({ open, main }) => [
  tw`flex-grow`,
  main && tw`hover:text-red-secondary`,
  main && open && tw`hover:text-black`,
];

function Item({ node, main, indentation, openChildState, setOpenChildState }) {
  const [openChild, setOpenChild] = useState(null);
  const handleClick = () => {
    setOpenChildState(node.id);
  };
  const handleClose = () => {
    setOpenChildState(null);
  };
  return (
    <>
      <li css={stylesItem({ main, open: node.id === openChildState })}>
        <div
          style={{ marginLeft: `${indentation}rem` }}
          css={stylesContent({ main, open: node.id === openChildState })}
        >
          {node.id}
        </div>
        {node?.children &&
          (node.id === openChildState ? (
            <FontAwesomeIcon
              icon={faMinus}
              tw="h-3 w-3 hover:transform hover:scale-150 "
              onClick={handleClose}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              tw="h-3 w-3 hover:transform hover:scale-150 "
              onClick={handleClick}
            />
          ))}
      </li>
      <ul css={stylesSubItems({ open: node.id === openChildState })}>
        {node.children &&
          node.children.map((node) => {
            return (
              <Item
                key={node.id}
                node={node}
                main={false}
                indentation={0.4 + (indentation || 0)}
                openChildState={openChild}
                setOpenChildState={setOpenChild}
              />
            );
          })}
      </ul>
    </>
  );
}
export default Item;
