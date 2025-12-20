import { sumPrice } from "../../utils/sumPrice";

type footerProps = {
  totalPrice:{id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}[]
  setProducts: React.Dispatch<React.SetStateAction<{
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}[]>>
}
function Footer(props:footerProps) {
   const price= sumPrice(props.totalPrice)
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-3xl">total:${price?price:0}</div>
      <div className="w-full grid place-items-center p-3 ">
        <button className="w-full bg-[#e9c9a2] rounded-md py-1">Submit Order</button>
      </div>
    </div>
  );
}

export default Footer;
