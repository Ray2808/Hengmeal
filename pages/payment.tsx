import link from "next/link"
import Cart from "@/components/Cart";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
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


export default function payment() {
    return (
        <div>
            <div>
                <hr className="h-3.5 w-11/12 rounded-xl m-auto border-none top-32 bg-[#d9d9d9] relative" />
                <div className="flex justify-between items-center mt-3 mx-20">
                    <img className="w-32 relative" src="Logo.png" />
                    <label className="absolute text-base font-normal lg:text-xl left-60 top-20 ">Hi, Username</label>
                    <img className="w-24 h-24" src="profile1.png" alt="" />
                </div>
            </div>
            <div className="mx-auto mt-16 flex flex-row justify-center gap-20 w-full">
                <div>
                    {/* <Cart />
                    <Cart />
                    <Cart />
                    <Cart /> */}
                </div>
                <div className="relative w-96 h-128 font-body bg-[#d9d9d9] rounded-3xl">
                    <hr className="w-4/5 border-b-3.5 border-dashed border-black mx-auto my-5" />
                    <label className="font-bold text-lg ml-10 mt-5">NASI GORENG SLEBEW</label>
                    <hr className="w-4/5 border-b-3.5 border-dashed border-black mx-auto" />
                    <label className="ml-10">ITEM COUNT :</label>
                    <br />
                    <label className="ml-10">TOTAL :</label>
                    <hr className="w-4/5 border-b-3.5 border-dashed border-black mx-auto" />
                    <a href="#" className="absolute bottom-0 font-bold text-3xl text-white w-full h-1/5 rounded-b-3xl bg-yellow-600 flex items-center justify-center no-underline hover:bg-yellow-700 transition duration-200">PURCHASE</a>
                </div>
            </div>
        </div>
    )
}       