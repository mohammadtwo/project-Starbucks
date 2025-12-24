
type Data={
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}[]
export function sumPrice(array:Data):number {
  return array.reduce((acc,item)=>{
  return  (item.price*item.quantity)+ acc
 },0)
}
