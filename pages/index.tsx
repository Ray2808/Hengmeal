import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href=""><img className="w-1/4 mx-auto mt-32" src="Logo.png" /></Link>
        <Link href="/login"><div className="text-center">
          <button className="p-2 mt-12 w-1/5 text-2xl rounded-full cursor-pointer bg-gray-300 transition duration-300 hover:bg-gray-400">Login</button>
        </div></Link>
        <Link href="/sign_up"><div className="text-center mt-4">
          <button className="p-2 w-1/5 text-2xl rounded-full cursor-pointer bg-gray-300 transition duration-300 hover:bg-gray-400">Sign Up</button>
        </div></Link>
      </div>
    </div>
  )
}
