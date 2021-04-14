import tw from "twin.macro";

export default function VehicleType() {
  return (
    <div tw="mb-3">
      <div tw="w-full p-2 mb-3 bg-gray-sideNav uppercase text-white text-xs font-semibold text-center rounded-sm">
        hae valitsemalla ajoneuvo
      </div>
      <select tw="p-1 text-xs border border-gray-200 w-full mb-3 bg-gray-50">
        <option>1. Valitse ajoneuvotyyppi</option>
      </select>
      <select tw="p-1 text-xs border border-gray-200 w-full mb-3 bg-gray-50">
        <option>2. Valitse merkki</option>
      </select>
      <select tw="p-1 text-xs border border-gray-200 w-full mb-3 bg-gray-50">
        <option>3. Valitse malli</option>
      </select>
      <select tw="p-1 text-xs border border-gray-200 w-full mb-3 bg-gray-50">
        <option>4. Valitse vuosimalli</option>
      </select>
      <button tw="w-full mt-1 flex justify-center py-2 px-3 text-base uppercase text-white font-semibold bg-green-button rounded-sm">
        hae varaosia
      </button>
    </div>
  );
}
