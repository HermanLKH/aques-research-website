import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function OurTeam() {
  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-10/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-5xl text-center">
            Contact <span className="text-cyan-600">AquES</span>
          </h1>
          <p className="text-center font-light mt-2">
            Reach out to us for detailed information. Your feedback are
            invaluable in helping us enhance our research and outreach efforts.
          </p>
        </div>
      </section>

      {/* Section 2: Founders */}
      <section className="bg-slate-50 py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl text-center mb-5">
            Send us an email
          </h2>
        </div>
      </section>
    </>
  );
}
