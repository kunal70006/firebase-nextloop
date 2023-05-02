import { useAuthContext } from "@/context/AuthContext";
import googleSignIn, { logOut } from "@/services/signInUsingGoogle";
import Button from "@/ui/button";
import { useRouter } from "next/router";

export default function Home() {
  const user = useAuthContext();
  const router = useRouter();
  async function handleLogin() {
    await googleSignIn();
    router.push("/notes");
  }
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-5xl text-red-600 font-semibold tracking-tight">
        Firebase <span className=" text-stone-800">Demo</span>
      </h1>
      {user ? (
        <Button onClick={logOut}>Sign Out</Button>
      ) : (
        <Button onClick={handleLogin}>Google Sign In</Button>
      )}
    </div>
  );
}
