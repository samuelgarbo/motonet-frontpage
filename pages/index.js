// import styles from "../styles/Home.module.css";
import tw from "twin.macro";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LogRocket from "logrocket";
LogRocket.init("skmzlz/motonet-frontpage");

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <main tw="w-full grid grid-cols-5">
        <section tw="col-span-1 h-112 bg-blue-200">
          <div>
            <div tw="w-full p-2 bg-gray-sideNav uppercase text-white text-xs font-semibold text-center">
              rekisterinumerolla haku
            </div>
            <div></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
