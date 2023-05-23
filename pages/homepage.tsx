const kantin1 = require("@/items/kantin1.json");
const kantin2 = require("@/items/kantin2.json");
const kantin3 = require("@/items/kantin3.json");
import Link from "next/link";
import { FaUser, FaCartPlus } from "react-icons/fa";
import Item from "@/components/Item";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useState, useEffect } from "react";
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return { props: {} };
}

interface Data {
  nama: string;
  code: string;
  image: string;
  price: number;
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const handleClick = async () => {
    signOut()
  }
  const [select, setSelect] = useState(0);
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    setData(select === 0 ? kantin1 : select === 1 ? kantin2 : kantin3);
    console.log(data);
  }, [select, kantin1, kantin2, kantin3]);

  const selected = "cursor-pointer w-[250px] h-[60px] mx-auto rounded-md bg-[#C48888] flex items-center justify-center"
  const norm = "cursor-pointer w-[250px] h-[60px] mx-auto rounded-md transition-all duration-200 hover:bg-[#C48888] flex items-center justify-center";

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5">
      <div className="w-[900px] h-[60px] bg-[#E1ACAC] flex flex-row justify-center items-center rounded-md">
        <div className="w-[300px] h-full flex">
          <p className="ml-5 text-2xl my-auto font-semibold">Hi, {user?.name}</p>
        </div>
        <div className="w-[300px] h-full bg-[#A09393]"></div>
        <div className="w-[300px] h-full flex flex-row justify-between items-center">
          <div onClick={handleClick} className="cursor-pointer flex justify-center items-center bg-white w-[40px] h-[40px] rounded-full ml-auto mr-5">
            <FaUser className="text-[#E1ACAC] text-xl" />
          </div>
        </div>
      </div>
      <div className="w-[900px] h-[450px] bg-[#E1ACAC] flex flex-row rounded-md overflow-hidden">
        <div className="w-[300px] h-[450px] flex flex-col items-center gap-2">
          <div className="pt-[25px] flex flex-col justify-center gap-5">
            <div onClick={() => setSelect(0)} className={select === 0 ? selected : norm}><p className="text-white text-2xl font-normal">Kantin 1</p></div>
            <div onClick={() => setSelect(1)} className={select === 1 ? selected : norm}><p className="text-white text-2xl font-normal">Kantin 2</p></div>
            <div onClick={() => setSelect(2)} className={select === 2 ? selected : norm}><p className="text-white text-2xl font-normal">Kantin 3</p></div>
          </div>
          <div className="cursor-pointer w-[250px] h-[60px] flex flex-row gap-5 justify-center items-center mt-auto mb-[25px] bg-[#C48888] rounded-md">
            <FaCartPlus className="text-3xl text-white" />
            <Link href ="/cart"><p className="text-2xl font-medium text-white">Checkout now</p></Link>
          </div>
        </div>
        <div className="w-[600px] h-[450px] bg-[#D9D9D9] p-[25px] gap-[25px] flex flex-row flex-wrap overflow-y-scroll">
          {data.length > 1 && parseInt(selected) === 0
            ? data.map((item: any) => (
          <Item key={item.code} name={item.nama} image={item.image} code={item.code} />
          ))
          : parseInt(selected) === 1
            ? data.map((item: any) => (
          <Item key={item.code} name={item.nama} image={item.image} code={item.code} />
          ))
            : data.map((item: any) => (
          <Item key={item.code} name={item.nama} image={item.image} code={item.code} />
          ))}
        </div>
      </div>
    </div>
  )
}