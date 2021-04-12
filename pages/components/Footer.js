import tw, { css } from "twin.macro";
import Image from "next/image";

import { footerData, footerImageText } from "../../data";

const stylesFooterCol = (notFirst) => [tw`col-span-1`, notFirst && tw`ml-9`];

export default function Footer() {
  let footer = footerData.map((key, idx) => {
    return (
      <div key={idx} css={stylesFooterCol(idx !== 0)}>
        {key.map((obj, idx) => (
          <div key={idx} tw="mb-4">
            <h6 tw="text-base font-semibold text-gray-footerTitle py-1 px-0">
              {obj.title}
            </h6>
            <ul>
              {obj.list.map((item, idx) => (
                <li key={idx} tw="text-xs text-gray-footerText pb-1">
                  <span tw="hover:text-red-600 cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  });
  let footerImages = footerImageText.map((obj, idx) => {
    return (
      <div key={idx} tw="col-span-1 flex flex-col items-center pt-4">
        <Image height={80} width={80} src={obj.image} />
        {obj.text.map((text, idx) => (
          <p key={idx} tw="text-center text-xs text-gray-800">
            {text}
          </p>
        ))}
      </div>
    );
  });
  return (
    <footer tw="border-t p-4">
      <div tw="grid grid-cols-5">{footer}</div>
      <div tw="grid grid-cols-6">{footerImages}</div>
    </footer>
  );
}
