type cardProps = {
 name:string;
 img:string;
 quantity:number;
 price:number;
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
}
export function Card(props: cardProps) {
  return (
    <div className="flex flex-col pt-1.5 gap-3 items-center bg-[#1d3932]   h-75 w-50 rounded-2xl ">
      <div>
        <img className="h-37.5" src={"/Assets"+props.img} alt={props.name} />
      </div>
      <div className="items-start text-white w-full text-2xl font-semibold px-8">
       {props.name}
      </div>
      <div className="items-start w-full px-8 text-2xl font-bold text-[#e9c9a2]">
       {"$"+props.price}
      </div>
      <div className="flex h-8 w-31.25 bg-[#e9c9a2]  justify-between ">
        <button className="flex-1  grid place-items-center">+</button>
        <div className="flex-1  grid place-items-center bg-white">{props.quantity}</div>
        <button className=" flex-1  grid place-items-center">-</button>
      </div>
    </div>
  );
}