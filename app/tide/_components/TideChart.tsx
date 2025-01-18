"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // For the area fill
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Required for area graphs
);

interface TideDay {
  day: string;
  lowAM: { time: string; height: string };
  lowPM: { time: string; height: string };
  highAM: { time: string; height: string };
  highPM: { time: string; height: string };
}

interface TideData {
  tideData: TideDay[];
}

export default function TideChart() {
  const [tideData, setTideData] = useState<TideDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTideData() {
      try {
        const res = await fetch("/api/tide");
        const data: TideData = await res.json();
        if (data?.tideData) {
          setTideData(data.tideData);
        }
      } catch (error) {
        console.error("Error fetching tide data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTideData();
  }, []);

  if (loading) {
    return <div className="p-4">Loading tide data...</div>;
  }

  // --- Build chart points ---
  const parseHeight = (height: string) =>
    isNaN(parseFloat(height)) ? null : parseFloat(height);

  const points: { label: string; height: number | null }[] = [];
  tideData.forEach((day) => {
    const dayLabel = day.day;
    [
      { time: day.lowAM.time, height: day.lowAM.height },
      { time: day.highAM.time, height: day.highAM.height },
      { time: day.lowPM.time, height: day.lowPM.height },
      { time: day.highPM.time, height: day.highPM.height },
    ].forEach((tide) => {
      if (tide.time && tide.height && tide.height !== "-") {
        points.push({
          label: `${dayLabel} ${tide.time}`,
          height: parseHeight(tide.height),
        });
      }
    });
  });

  // Customized labels: Only show full day label for every 4th point
  const labels = points.map((point, index) => {
    if (index % 4 !== 0) {
      return "";
    } else {
      return point.label.split(" ")[0] + " " + point.label.split(" ")[1];
    }
  });

  const dataValues = points.map((p) => p.height);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Tide Height (m)",
        data: dataValues,
        fill: { value: -1 }, // Fill down to -1
        borderColor: "rgb(65, 143, 185, 1)", // Slightly lighter and more cyan
        backgroundColor: "rgb(81, 159, 197, 0.15)", // Light Blue with 40% transparency
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: "Tide Chart and Curves for Santubong",
        font: { size: 36 },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          title: (tooltipItems: any) => {
            const index = tooltipItems[0]?.dataIndex;
            return points[index]?.label || "";
          },
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            return `Tide Height (m): ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        min: -1,
        max: 4.0,
        ticks: { stepSize: 0.5 },
        title: { display: false },
        grid: { color: "#e5e7eb" }, // Light grid lines
      },
      x: {
        title: { display: false },
        grid: { color: "#e5e7eb" },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div className="w-full h-auto max-w-7xl mx-auto p-6 bg-white rounded-lg shadow">
      <Line data={chartData} options={options} />

      <footer className="mt-8 text-center text-sm text-gray-500">
        Tide data sourced from{" "}
        <a
          href="https://tidechecker.com/malaysia/sarawak/santubong/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          TideChecker - Santubong
        </a>
      </footer>
    </div>
  );
}
