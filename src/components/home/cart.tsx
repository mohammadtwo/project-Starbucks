type CartProps = {
  id:number;
  name:string;
  img:string;
  price:number;
  quantity:number;
}
export function Cart(props:CartProps) {
  return (
    <div>
     
      <div className="flex flex-col pt-1.5 lg:pt-0 gap-3 lg:gap-1 lg:h-70 items-center bg-[#1d3932]   h-75 w-50 rounded-2xl ">
        <div>
          <img
            className="h-37.5"
            src={"/Assets" + props.img}
            alt={props.name}
          />
        </div>
        <div className="items-start text-white w-full text-2xl font-semibold px-8">
          {props.name}
        </div>
        <div className="items-start w-full px-8 text-2xl font-bold text-[#e9c9a2]">
          {"$" + (props.quantity ? props.price * props.quantity : props.price)}
        </div>
        <div className="items-start text-white w-full text-2xl font-semibold px-8">
          Qty : {props.quantity}
        </div>
      </div>
    </div>
  )
}