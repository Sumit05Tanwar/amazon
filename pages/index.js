import Data from "../utils/Data";
import Head from "next/head";
import Layout from "../Components/Layout";
import ProductItem from "../Components/ProductItem";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="main">
        <div className="grid grid-col-1 gap-4 md;grid-col-3 lg:grid-col-4">
          {Data.products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </Layout>
    </div>
  );
}
