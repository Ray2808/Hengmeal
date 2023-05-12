import Link from "next/link";
export default function sign_up() {
  return (
    <div>
      <Link href="">
        <img className="w-1/6 mx-auto mt-20" src="Logo.png" />
      </Link>
      <div className="text-center">
        <input className="rounded-3xl w-1/3 mt-8 bg-[#d9d9d9] text-10 h-11 pl-3" type="text" placeholder="Username"/>
      </div>
      <div className="text-center">
        <input className="rounded-3xl w-1/3 mt-8 bg-[#d9d9d9] text-10 h-11 pl-3" type="password" placeholder="Full Name"/>
      </div>
      <div className="text-center">
        <input className="rounded-3xl w-1/3 mt-8 bg-[#d9d9d9] text-10 h-11 pl-3 pr-3" type="date"/>
      </div>
      <div className="text-center">
        <input className="rounded-3xl w-1/3 mt-8 bg-[#d9d9d9] text-10 h-11 pl-3" type="text" placeholder="Student Identification Number"/>
      </div>
      <div className="text-center">
        <input className="rounded-3xl w-1/3 mt-8 bg-[#d9d9d9] text-10 h-11 pl-3" type="password" placeholder="Password"/>
      </div>
      <div className="text-center">
        <Link href=""><button className="h-12 w-44 text-lg rounded-3xl bg-gray-300 transition duration-300 hover:bg-gray-400 mt-8">Register</button></Link>
      </div>
    </div>
  );
}