import { Card } from "./card";
export type ContainerProps = {
  products: { name: string; img: string; price: number; quantity: number }[];
  setProducts: React.Dispatch<
    React.SetStateAction<
      {
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
      {props.products.map((products) => (
        <Card
          name={products.name}
          img={products.img}
          price={products.price}
          quantity={products.quantity}
          setProducts={props.setProducts}
        />
      ))}
     
    </div>
  );
}
