"use client";
import React from "react";
import PriceCards from "@/components/ui/price-card";
import { useRouter } from "next/navigation";
import { BrainCircuit } from "lucide-react";

type Props = {};

const Pricing = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <PriceCards />
      </div>
    </div>
  );
};

export default Pricing;
