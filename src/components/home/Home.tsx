import { useState } from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { data } from "../../utils/data";
import Footer from "./Footer";

function Home() {
  const [products,setProducts]=useState(data)
  return (
    <div className="flex flex-col h-screen bg-[#ececec]">
      <Header />
      <Container products={products} setProducts={setProducts} />
      <Footer totalPrice={products} setProducts={setProducts} />
    </div>
  );
}

export default Home;
