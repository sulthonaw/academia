import Image from "next/image";
import React from "react";
import LoginForm from "./form";

export default function Page() {
  return (
    <section className="flex [&>*]:min-h-screen w-full">
      <div className="h-full bg-primary w-full">p</div>
      <div className="max-w-xl w-full px-28 flex justify-center items-center py-16">
        <div className="w-full">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="mx-auto"
          />
          <h1 className="font-bold text-center ">ACADEMIA</h1>

          <h1 className="text-3xl text-center font-bold my-8">Log In</h1>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
