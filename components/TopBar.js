import tw from "twin.macro";

export default function TopBar() {
  return (
    <div tw="flex bg-gray-800 h-7 justify-center">
      <div tw="flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-l border-gray-400 hover:bg-red-primary transition-colors cursor-pointer">
        tavaratalot
      </div>
      <div tw="flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-red-primary transition-colors cursor-pointer">
        motomaatti
      </div>
      <div tw="flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-red-primary transition-colors cursor-pointer">
        korjaamot
      </div>
      <div tw="flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-red-primary transition-colors cursor-pointer">
        kanta-asiakas
      </div>
      <div tw="flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-red-primary transition-colors cursor-pointer">
        ajankohtaista
      </div>
      <div tw="flex items-center text-white text-xs font-semibold uppercase px-3 border-r border-gray-400 hover:bg-red-primary transition-colors cursor-pointer">
        asiakaspalvelu
      </div>
    </div>
  );
}
