import tw from "twin.macro";
import { useState } from "react";

import Item from "./Item";

function CategoryNav({ data }) {
  const [openChild, setOpenChild] = useState(null);
  return (
    <div tw="p-2 shadow-inner">
      <div tw="py-1 mb-3 bg-red-primary text-xs uppercase text-white font-semibold text-center rounded-sm">
        valitse tuoteryhmä
      </div>
      <ul>
        {data.children.map((node) => {
          return (
            <Item
              key={node.id}
              node={node}
              main={true}
              indentation={0}
              openChildState={openChild}
              setOpenChildState={setOpenChild}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default CategoryNav;
