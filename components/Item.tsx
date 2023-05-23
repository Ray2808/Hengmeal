import { FaPlus } from "react-icons/fa";
import useCurrentUser from "@/hooks/useCurrentUser";
import axios from "axios";
interface ItemProps {
  name: String
  image: string
  code: string
}

const Item: React.FC<ItemProps> = ({
  name, image, code
}) => {
  const { data: user } = useCurrentUser();
  const handleClick = async () => {
    const res = await axios.post("/api/add", {
      id: user.cart,
      itemId: code
    })
    console.log(res.data)
  }

  return (
    <div onClick={handleClick} className="cursor-pointer w-[250px] h-[150px] bg-[#A09393] rounded-md relative group overflow-hidden">
      <img className="w-full h-full object-cover opacity-100 hover:opacity-10 absolute hover:bg-[#000000]" src={image} alt="" />
      <div className="w-[250px] h-[150px] bg-black opacity-0 group-hover:opacity-20 transition-all duration-200"></div>
      <div className="w-[250px] h-[150px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
        <FaPlus className="text-[24px] text-white z-10" />
      </div>
      <div className="w-[250px] pl-2 pb-1 group-hover:opacity-100 opacity-0 z-10 absolute text-white bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-200">
        {name}
      </div>
    </div>
  );
};

export default Item;