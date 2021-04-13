import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CategoryNav() {
  return (
    <div tw="p-2 shadow-inner">
      <div tw="py-1 mb-3 bg-red-primary text-xs uppercase text-white font-semibold text-center rounded-sm">
        valitse tuoteryhmä
      </div>
      <ul>
        <li tw="flex items-center justify-between bg-gray-600 text-white text-xs font-semibold py-1 px-2 normal-case border border-gray-400  cursor-pointer">
          <div tw="hover:text-red-secondary flex-grow">Asdfa</div>
          <FontAwesomeIcon
            icon={faPlus}
            tw="h-3 w-3 hover:transform hover:scale-150 hover:text-yellow-200"
          />
        </li>
        <li tw="flex items-center justify-between bg-gray-600 text-white text-xs font-semibold py-1 px-2 normal-case border border-gray-400  cursor-pointer">
          <div tw="hover:text-red-secondary flex-grow">Asdfa</div>
          <FontAwesomeIcon
            icon={faPlus}
            tw="h-3 w-3 hover:transform hover:scale-150 hover:text-yellow-200"
          />
        </li>
        <li tw="flex items-center justify-between bg-gray-600 text-white text-xs font-semibold py-1 px-2 normal-case border border-gray-400  cursor-pointer">
          <div tw="hover:text-red-secondary flex-grow">Asdfa</div>
          <FontAwesomeIcon
            icon={faPlus}
            tw="h-3 w-3 hover:transform hover:scale-150 hover:text-yellow-200"
          />
        </li>
      </ul>
    </div>
  );
}
export default CategoryNav;
