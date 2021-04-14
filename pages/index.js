require("isomorphic-fetch");
import tw from "twin.macro";

import Image from "next/image";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarRegister from "../components/CarRegister";
import VehicleType from "../components/VehicleType";
import CategoryNav from "../components/CategoryNav";

export default function Home({ data }) {
  return (
    <div>
      <Header />
      <Banner />
      <main tw="w-full grid grid-cols-5 p-3 pt-6 mb-4">
        <section tw="col-span-1 pr-3">
          <CarRegister />
          <VehicleType />
          <CategoryNav data={data} />
        </section>
        <div tw="grid grid-cols-4 col-span-4 pl-3 gap-x-4">
          <div tw="col-span-4 lg:col-span-2">
            <img src={"/Banner1.png"} tw="w-full h-auto mb-8 rounded-sm" />
          </div>
          <div tw="col-span-4 lg:col-span-2">
            <img src={"/Banner2.png"} tw="w-full h-auto mb-8 rounded-sm" />
          </div>
          <div tw="col-span-4 lg:col-span-2">
            <img src={"/Ad1.png"} tw="w-full h-auto mb-8 rounded-sm" />
          </div>
          <div tw="col-span-4 lg:col-span-2">
            <img src={"/Ad1.png"} tw="w-full h-auto mb-8 rounded-sm" />
          </div>
          <div tw="col-span-4 lg:col-span-2">
            <img src={"/Banner3.png"} tw="w-full h-auto mb-8 rounded-sm" />
          </div>
          <div tw="col-span-4 lg:col-span-2">
            <img src={"/Banner5.png"} tw="w-full h-auto mb-8 rounded-sm" />
          </div>
          <div tw="col-span-4">
            <h1 tw="text-xl font-semibold mb-6">
              Tervetuloa Motonet-verkkokauppaan!
            </h1>
            <p tw="mb-3">
              Motonetista löydät auton varaosat yli 700 ajoneuvomalliin.
              Autovaraosien lisäksi saat kaiken tarvitsemasi autoiluun,
              moottoripyöräilyyn, polkupyöräilyyn, kalastukseen sekä veneilyyn.
              Valikoimassamme myös kattava valikoima työkaluja ja
              rakennustarvikkeita.
            </p>
            <p tw="mb-3">
              Tuotteiden haku ja tilaaminen verkkokaupasta on nopeaa ja helppoa.
              Tuotekortilta näet tuotteiden saatavuuden, hyllypaikan
              tavarataloissa ja verkkokaupasta.
            </p>
            <p tw="mb-3">
              Voit aloittaa sivustoon tutustumisen sivun yläosan osastovalikosta
              tai voit valita haluamasi tuoteryhmän sivun vasemmasta reunasta.
            </p>
            <h2 tw="text-2xl font-semibold mb-3">Auton varaosat netistä</h2>
            <p tw="mb-3">
              Motonet-verkkokaupan kattavista varaosaluetteloista löydät
              taatusti sopivat ja kestävät varaosat autoihin, moottoripyöriin,
              mopoautoihin, mönkijöihin sekä perämoottoreihin. Varaosahaku
              rekisterinumerolla onnistuu tavaratalon palvelutiskillä.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  let res = await fetch(
    "https://samuel-2643859.myshopify.com/api/2021-04/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_SECRET,
      },
      body: JSON.stringify({
        query: `
      query{
        collections(first:250){
            edges{
                node{
                    title
                }
            }
        }
       }`,
      }),
    }
  );
  let jsonData = await res.json();
  let data = [];

  jsonData.data.collections.edges.forEach((edge) => {
    let arr = edge.node.title.split(":");
    if (arr.length === 1) {
      data.push({ id: arr[0].toLowerCase(), parent: "root" });
    } else if (arr.length > 1) {
      data.push({ id: arr[0].toLowerCase(), parent: arr[1].toLowerCase() });
    }
  });

  data.unshift({ id: "root", parent: null });
  const idMapping = await data.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});

  let root;

  data.forEach((el) => {
    // Handle the root element
    if (el.parent === null) {
      root = el;
      return;
    }
    // Use mapping to locate the parent element in data array
    let parentEl = data[idMapping[el.parent]];
    // Add current el to parent's children array
    parentEl.children = [...(parentEl.children || []), el];
  });

  return {
    props: { data: root }, // will be passed to the page component as props
  };
}
