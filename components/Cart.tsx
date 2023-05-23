interface CartProps {
 quantity: number;
 code: string
}

const Cart : React.FC<CartProps> = ({
  quantity,code,
}) => {
  return (
    <div className="flex-row w-[650px] h-44 bg-[#d9d9d9] rounded-3xl flex items-center justify-center gap-6 mb-5">
      <img src="nasgor.png" className="h-40 left-40" alt="" />
      <div className="flex flex-col gap-2">
        <label className="text-3xl">Nasi Goreng Aheng</label>
        <label className="text-xl">Left over rice, Dried seaweed, <br></br>Sunny Side Up Egg, Special Spice</label>
      </div>
    </div>
  )
}

export default Cart;