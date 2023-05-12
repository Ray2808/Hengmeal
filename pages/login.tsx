import Link from "next/link";
export default function Login() {
  return (
<div>
    <div>
        <a href=""><img className="w-1/6 mx-auto mt-24" src="Logo.png" /></a>
    </div>
    <div className="text-center">
        <input className="rounded-2xl w-1/3 mt-8 bg-[#d9d9d9] text-lg h-11 pl-3" type="text" placeholder="Username" />
    </div>
    <div className="text-center">
        <input className="rounded-2xl w-1/3 mt-6 bg-[#d9d9d9] text-lg h-11 pl-3" type="password" placeholder ="Password" />
    </div>
    <div className="text-center">
    <p>Don't Have Account?<Link href="" className="text-blue-400"> Sign Up Here!</Link> </p>
    </div>
    <div className="text-center">
        <Link href=""><button className="h-12 w-44 text-lg rounded-2xl bg-gray-300 transition duration-300 hover:bg-gray-400 mt-32">Login</button></Link>
    </div>
</div>
  )
}