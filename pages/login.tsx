import Link from "next/link";
import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import { NextPageContext } from "next";
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/homepage",
        permanent: false
      }
    }
  }

  return { props: {} };
}
export default function Login() {
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
  return (
<div>
    <div className="w-full flex flex-col items-center justify-center gap-3">
        <a href=""><img className="w-1/6 mx-auto mt-24" src="Logo.png" /></a>
        <div className="flex flex-col w-[400px] gap-5">
        <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email} />
        <Input label="Password" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password} />
        <div className="text-center">
        <button onClick = {login}className="h-12 w-44 text-lg rounded-2xl bg-gray-300 transition duration-300 hover:bg-gray-400 mt-32">Login</button>
        </div>
        </div>
    </div>
</div>
  )
  }