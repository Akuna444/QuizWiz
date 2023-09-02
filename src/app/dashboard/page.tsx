import Image from "next/image";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | QuizWiz",
  description: "Quiz yourself on anything!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex flex-col items-center w-full">
        <div className="flex w-[70%] justify-center">
          <h1 className="text-center leading-[4rem] text-5xl">
            Welcome to QuizWiz were
            <span className="text-[#4ECDC4]"> Innovation</span> meets
            <span className="text-[#4ECDC4]"> Education</span> empowering you to
            excel
          </h1>
        </div>
        <div className="mt-16">
          <QuizMeCard />
        </div>
        <div>
          <Image
            className="absolute bottom-7 left-0"
            src="/quizgirl.png"
            alt="quizgirl"
            height={400}
            width={400}
          />
          <Image
            className="absolute bottom-0 right-0"
            src="/quizguy.png"
            alt="quizguy"
            height={250}
            width={250}
          />
        </div>
      </div>
    </main>
  );
};

export default Dasboard;
