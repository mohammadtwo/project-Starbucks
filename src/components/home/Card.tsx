
type cardProps = {
  products: {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
  }[];
  id: number;
  name: string;
  img: string;
  quantity: number;
  price: number;
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
export function Card(props: cardProps) {
  const handelQuantity = (operation: "+" | "-") => {
    if (operation === "+") {
      return props.setProducts(
        props.products.map((item) =>
          item.id === props.id ? { ...item, quantity: props.quantity + 1 } : item
        )
      );
    } else {
      return props.setProducts(
        props.products.map((item) =>
          item.id === props.id
            ? {
                ...item,
                quantity: props.quantity ? props.quantity - 1 : props.quantity,
              }
            : item
        )
      );
    }
  };

  return (
    <div  className="flex flex-col pt-1.5 gap-3 items-center bg-[#1d3932]   h-75 w-50 rounded-2xl ">
      <div>
        <img className="h-37.5" src={"/Assets" + props.img} alt={props.name} />
      </div>
      <div className="items-start text-white w-full text-2xl font-semibold px-8">
        {props.name}
      </div>
      <div className="items-start w-full px-8 text-2xl font-bold text-[#e9c9a2]">
        {"$" +(props.price)}
      </div>
      <div className="flex h-8 w-31.25 bg-[#e9c9a2]  justify-between ">
        <button
          className="flex-1  grid place-items-center"
          onClick={() => handelQuantity("+")}
        >
          +
        </button>
        <div className="flex-1  grid place-items-center bg-white">
          {props.quantity}
        </div>
        <button
          className=" flex-1  grid place-items-center"
          onClick={() => handelQuantity("-")}
        >
          -
        </button>
      </div>
    </div>
  );
}
