import Link from "next/link"
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return { props: {} };
}

export default function selected_food(){
    return (
        <div className="relative">
            <div className="mt-8 p-8 flex content-center justify-center">
                <div className="w-4/5 text-center bg-[#a09393] rounded-3xl flex flex-row content-between">
                    <div className="flex items-center pl-12 w-1/3 h-20 bg-[#e1acac] rounded-tl-3xl rounded-bl-3xl">
                        <label className="text-xl"></label>
                    </div>
                    <div className="flex flex-row pt-0 pb-0 pl-8 pr-8 content-between items-center w-1/4 h-20 bg-[#e1acac] rounded-tr-3xl rounded-br-3xl">
                        <Link href = ""><img className ="w-20" src="profile1.png" alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="flex content-center pt-2.5 pb-2.5 pl-8 pr-8">
                <div className="w-132 h-129 rounded-3xl bg-[#d9d9d9df]">
                    <div className="top-0 mt-20 absolute right-132 text-center flex flex-row gap-5">
                        <Link href=""></Link>
                        <div className=" w-52 h-36 rounded-3xl bg-cover"></div>
                        <img src="nasgor.png" className="object-cover" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}