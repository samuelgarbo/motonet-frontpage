import tw from "twin.macro";

export default function CarRegister() {
  return (
    <div tw="mb-6">
      <div tw="w-full mb-1 p-2 bg-gray-sideNav uppercase text-white text-xs font-semibold text-center rounded-sm">
        rekisterinumerolla haku
      </div>
      <div tw="mb-1 flex rounded-sm justify-start flex-grow h-10 border border-blue-800">
        <span tw="inline-flex items-center px-3 rounded-l-sm border-gray-300 bg-gray-50 text-black hover:bg-gray-200 text-sm cursor-pointer">
          FIN
        </span>
        <input
          type="text"
          name="company_website"
          tw="focus:outline-none  block rounded-none rounded-r-sm sm:text-sm border-gray-300 px-3 w-112"
          placeholder="ANNA REKISTERINUMERO"
        />
      </div>
      <button tw="w-full flex justify-center py-2 px-3 text-base uppercase text-white font-semibold bg-green-button rounded-sm">
        hae varaosia
      </button>
    </div>
  );
}
