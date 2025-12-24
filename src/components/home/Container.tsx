import { Card } from "./Card";
import { Cart } from "./cart";

export type ContainerProps = {
  products: {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
  }[];
  setProducts: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        img: string;
        price: number;
        quantity: number;
      }[]
    >
  >;
};
export function Container(props: ContainerProps) {
  return (
    <div className="flex-1 gap-2 lg:gap-0.5 p-5 overflow-y-scroll  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center  w-full">
      {props.products.map((product) => (
        <Card
          products={props.products}
          key={product.id}
          id={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          quantity={product.quantity}
          setProducts={props.setProducts}
        />
      ))}
<div className="grid place-items-center text-3xl font-bold md:col-span-2 lg:col-span-5">bill</div>
      {props.products.map(product =>  <Cart

          key={product.id}
          id={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          quantity={product.quantity}
        />
      )}
    </div>
  );
}
