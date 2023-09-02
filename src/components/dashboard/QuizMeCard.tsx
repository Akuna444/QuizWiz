"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { BrainCircuit } from "lucide-react";

type Props = {};

const QuizMeCard = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <button
        className="w-[200px] px-8 py-4 rounded-[20px] border-[1px] hover:translate-y-[-10px] transition-all ease-in-out border-[#4ECDC4] shadow-2xl shadow-[#4ECDC4]"
        onClick={() => router.push("/quiz")}
      >
        <p className="font-bold text-[#1A535C]">Lets get started</p>
      </button>
    </div>
  );
};

export default QuizMeCard;
