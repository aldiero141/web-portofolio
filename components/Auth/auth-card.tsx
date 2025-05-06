// import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const DEFAULT_LOGO = {
  url: "https://www.google.com",
  src: "/assets/placeholder.svg",
  alt: "boilerplate",
};

type LoginProps = {
  heading?: string;
  subheading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
  };
  type?: "login" | "register";
};

export default function LoginCard({
  heading = "Login",
  subheading = "Welcome back",
  logo = DEFAULT_LOGO,
  type = "login",
}: LoginProps) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
      <div className="mb-6 flex flex-col items-center">
        <Link href={logo.url} className="mb-6 flex items-center gap-2">
          <Image src={logo?.src} width={16} height={16} className="max-h-8 object-cover" alt={logo.alt} />
        </Link>
        <h1 className="mb-2 text-2xl font-bold">{heading}</h1>
        <p className="text-muted-foreground">{subheading}</p>
      </div>
      <div>
        {
          type === "login" ? <LoginForm /> : <RegisterForm />
        }
      </div>
    </div>
  );
};
