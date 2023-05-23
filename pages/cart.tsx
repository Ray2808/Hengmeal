const kantin1 = require("@/items/kantin1.json");
const kantin2 = require("@/items/kantin2.json");
const kantin3 = require("@/items/kantin3.json");

import Carts from "@/components/Carts"
import { NextPageContext } from "next";
import axios from "axios";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect, useState } from "react";
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

export default function Cart() {
  const { data: user } = useCurrentUser();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(cart.length);
  const [totalPrice, setPrice] = useState(0);

  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    if (kantin1 && kantin2 && kantin3) {
      setData(kantin1.concat(kantin2, kantin3));
      console.log(data);
    }
  }, [kantin1, kantin2, kantin3]);

  useEffect(() => {
    if (user) {
      const handle = async () => {
        const res = await axios.get("/api/cart", {
          params: {
            userId: user.id
          }
        })
        setCart(res.data.items);
        console.log(cart);
      }
      handle();
    }

  }, [user])

  useEffect(() => {
    const totalPrice = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + (data.find((item) => item.code === currentItem)?.price || 0),
      0
    );
    setPrice(totalPrice);
  }, [cart, data]);

  useEffect(() => {
    setTotal(cart.length);
    console.log(cart);
  }, [cart])

  const handlePayment = () => {
    const handle = async() => {
      const res = await axios.get("/api/handlePayment", {
        params: {
          userId: user.id,
          totalItems: total,
          totalPrice: totalPrice
        }
      })
      console.log(res.data)
    }
    handle();
  }

  const updateTotalCount = (count: number, price: number) => {
    setTotal(total + count);
    setPrice(totalPrice + price);
  };

  return (
    <div className="w-full h-[300px]">
      <div className="flex flex-col mb-8">
        <div className="w-full h-[150px] flex flex-row justify-between items-center">
          <img className="ml-[50px] w-[120px] h-[96px]" src="Logo.png" />
          <div onClick={handlePayment} className="mr-[50px] w-[250px] h-[65px] text-white bg-[#BCA555] rounded-md text-2xl flex items-center justify-center cursor-pointer">Checkout</div>
        </div>
        <div className="h-[10px] w-[1300px] mx-auto rounded-full bg-[#d9d9d9]"></div>
      </div>
      <div className="flex flex-col gap-10">
        {cart &&
  data &&
  cart.map((carts: any) => (
    <div key={carts}>
      <Carts
        image={data.find((dat) => dat.code === carts)?.image as string}
        updateTotalCount={updateTotalCount}
        price={data.find((dat) => dat.code === carts)?.price as number} // Add the price prop here
      />
      <div>
        <p>Total Count: {totalPrice}</p>
      </div>
    </div>
  ))}

      </div>
    </div>
  )
}