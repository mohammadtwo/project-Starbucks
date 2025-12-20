import { Card } from "./card";
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
    <div className="flex-1 gap-2 p-5 overflow-y-scroll  grid grid-cols-1 justify-items-center  w-full">
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
    </div>
  );
}
