import Image from "next/image";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="font-sans p-4 fixed top-0 overflow-auto">
        <div className="flex p-8 justify-center items-center mt-16">
          WELCOME TO MY MULTI-TENANT BLOG-APP
        </div>
    </div>
  );
}
