require("isomorphic-fetch");

import tw from "twin.macro";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarRegister from "./components/CarRegister";
import VehicleType from "./components/VehicleType";
import CategoryNav from "./components/CategoryNav";

export default function Home({ data }) {
  return (
    <div>
      <Header />
      <Banner />
      <main tw="w-full grid grid-cols-5 p-3 ">
        <section tw="col-span-1">
          <CarRegister />
          <VehicleType />
          <CategoryNav data={data} />
        </section>
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
        collections(first:10){
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
