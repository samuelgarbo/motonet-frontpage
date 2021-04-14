import tw, { css } from "twin.macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const stylesItem = ({ main, open }) => [
  tw`flex items-center justify-between bg-gray-50 border-b  text-gray-600 text-xs font-normal py-1 px-2 normal-case cursor-pointer`,
  main && tw`bg-gray-600 text-white`,
  open && main && tw`bg-red-primary `,
  open && !main && tw`bg-gray-300 font-bold`,
];
const stylesItemList = ({ open }) => [
  tw`overflow-hidden max-h-0 transition-maxHeight ease-linear`,
  open && tw`max-h-screen`,
];
const stylesContent = ({ open, main }) => [
  tw`flex-grow`,
  main && tw`hover:text-red-secondary`,
];

function Item({ node, main }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <li css={stylesItem({ main, open })}>
        <div css={stylesContent({ main })}>{node.id}</div>
        {node?.children &&
          (open ? (
            <FontAwesomeIcon
              icon={faMinus}
              tw="h-3 w-3 hover:transform hover:scale-150 "
              onClick={handleClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              tw="h-3 w-3 hover:transform hover:scale-150 "
              onClick={handleClick}
            />
          ))}
      </li>
      <ul css={stylesItemList({ open })}>
        {node.children &&
          node.children.map((node) => {
            return <Item key={node.id} node={node} main={false} />;
          })}
      </ul>
    </>
  );
}

function CategoryNav({ data }) {
  return (
    <div tw="p-2 shadow-inner">
      <div tw="py-1 mb-3 bg-red-primary text-xs uppercase text-white font-semibold text-center rounded-sm">
        valitse tuoteryhmä
      </div>
      <ul>
        {data.children.map((node) => {
          return <Item key={node.id} node={node} main={true} />;
        })}
      </ul>
    </div>
  );
}
export default CategoryNav;
