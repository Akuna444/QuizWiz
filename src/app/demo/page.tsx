"use client";
import React from "react";
import PriceCards from "@/components/ui/price-card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";

type Props = {};

const Demo = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col mt-15 items-center w-full">
        <div>
          <h1 className="text-primary text-3xl py-8">
            &quot;Unlock the Power of QuizWiz: Your Step-by-Step Tutorial&quot;
          </h1>
        </div>
        <Link href="#">
          <Image
            src="/demo-hero.png"
            alt="demo-hero"
            width={600}
            height={600}
          />
        </Link>
      </div>
    </div>
  );
};

export default Demo;
