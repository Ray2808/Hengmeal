import Link from "next/link";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

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

export default function profile() {
  const { data: user } = useCurrentUser();

  return (
    <div className="font-aheng bg-[#f9cfad]">
      <div className="flex min-h-screen bg-[#e1acac] w-129">
        <div className="flex items-center flex-col justify-around mx-11 my-12 w-full">
          <Link href="/homepage"><img className="w-14" src="home.png" /></Link>
          <Link href="/cart"><img className="w-15" src="cart1.png" /></Link>
        </div>
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5">
        <img className="w-130" src="user.png" />
        <div>
          <p className="text-lg font-bolder ml-4 mb-1">Username</p>
          <div className="w-[500px] text-xl bg-black text-white py-2 px-4 rounded-full">{user && user.name}</div>
        </div>
        <div>
          <p className="text-lg font-bolder ml-4 mb-1">Email</p>
          <div className="w-[500px] text-xl bg-black text-white py-2 px-4 rounded-full">{user && user.email}</div>
        </div>
        <div>
          <p className="text-lg font-bolder ml-4 mb-1">NIS</p>
          <div className="w-[500px] text-xl bg-black text-white py-2 px-4 rounded-full">{user && user.nis}</div>
        </div>
      </div>
    </div>
  )
}