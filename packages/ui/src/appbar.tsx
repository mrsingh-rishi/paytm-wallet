import { Button } from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface AppbarProps {
  user?: {
    name?: string | null;
  };
  // TODO: can u figure out what the type should be here?
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-between border-b px-4">
      <div className="text-lg flex flex-col justify-center">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-blue-400 text-center cursor-pointer">
            PayTM
          </h1>
        </Link>
      </div>
      {!user ? (
        <div className="flex justify-center pt-2">
          <Button isLogin={true} onClick={user ? onSignout : onSignin}>
            Login
          </Button>
          <Button isLogin={false} onClick={() => router.push("/auth/signup")}>
            Signup
          </Button>
        </div>
      ) : (
        <div className="flex justify-center pt-2">
          <Button isLogin={true} onClick={onSignout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};
