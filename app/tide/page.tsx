// app/tide/page.tsx
import React from "react";
import TideChart from "./_components/TideChart";

export default function TidePage() {
  return (
    <main className="flex flex-col items-center justify-center px-8">
      <TideChart />
    </main>
  );
}
