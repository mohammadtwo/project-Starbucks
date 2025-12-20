import { useState } from "react";
import { Container } from "./Container";
import Footer from "./footer";
import { Header } from "./Header";
import { data } from "../../utils/data";

function Home() {
  const [products,setProducts]=useState(data)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Container products={products} setProducts={setProducts} />
      <Footer totalPrice={products} setProducts={setProducts} />
    </div>
  );
}

export default Home;
