import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
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
      </div>
    </main>
  );
};

export default Dasboard;
