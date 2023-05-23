import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Input from "@/components/Input";
import axios from "axios";
export default function sign_up()
 {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nis, setNis] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: "/",
      });

      if (result?.error) {
        console.log(result?.error);
      } else {
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const register = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", {
        nis: nis, email: email, name: name, password: password
      });

      login();
    } catch (error: any) {
      console.log(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <Link href="">
        <img className="w-2/5 mx-auto mt-20" src="Logo.png" />
      </Link>
      <div className = "flex flex-col w-[400px] gap-5">
        <Input label="Username" onChange={(ev: any) => setName(ev.target.value)} id="name" type="txt" value={name} />
        <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email} />
        <Input label="NIS" onChange={(ev: any) => setNis(ev.target.value)} id="nis" type="txt" value={nis} />
        <Input label="Password" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password} />
        <div className="text-center">
        <button onClick={register} className="h-12 w-44 text-lg rounded-3xl bg-gray-300 transition duration-300 hover:bg-gray-400 mt-8">Register</button>
        </div>
      </div>
    </div>
  );
}