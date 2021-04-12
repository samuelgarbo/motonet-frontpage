import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <div tw="flex justify-center items-center h-7 bg-blue-korona text-white text-xs cursor-pointer">
      <FontAwesomeIcon icon={faInfoCircle} tw="h-5 w-5 mr-2"></FontAwesomeIcon>
      Miten koronavirus vaikuttaa Motonetiin? Lue lisää{" "}
      <span tw="underline flex items-center ml-1">
        {" "}
        tästä <FontAwesomeIcon icon={faAngleDoubleRight} tw="h-3 w-3 ml-1" />
      </span>
    </div>
  );
}
