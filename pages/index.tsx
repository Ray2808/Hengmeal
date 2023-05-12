import Link from "next/link";
export default function Home() {
  return (
    <div>
        <div>
       <Link href=""><img className="w-1/4 mx-auto mt-32" src="Logo.png"  /></Link>
       <div className="text-center">
        <Link href=""><button className="p-2 mt-12 w-1/5 text-2xl rounded-full cursor-pointer bg-gray-300 transition duration-300 hover:bg-gray-400">Login</button></Link>
       </div>
       <div className="text-center mt-4">
        <Link href=""><button className="p-2 w-1/5 text-2xl rounded-full cursor-pointer bg-gray-300 transition duration-300 hover:bg-gray-400">Sign Up</button></Link>
       </div>
    </div>
    </div>
  )
}
