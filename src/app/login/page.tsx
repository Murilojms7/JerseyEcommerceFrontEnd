import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <NavBar active={"login"}/>
      
      <h1 className="font-bold size-20">Login</h1>
    </main>
  );
}