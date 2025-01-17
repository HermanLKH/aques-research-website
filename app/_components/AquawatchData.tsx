"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

export default function AquaWatchData() {
  const [tempData, setTempData] = useState<any>(null);
  const [phData, setPhData] = useState<any>(null);

  const chartTempOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: "Temperature",
        font: { size: 32 },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          title: (tooltipItems: any) => {
            const index = tooltipItems[0]?.dataIndex;
            return tooltipItems[0]?.dataset.labels?.[index] || "";
          },
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw.toFixed(2);
            return `Temperature: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 0.2,
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  const chartPHOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: "pH",
        font: { size: 32 },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          title: (tooltipItems: any) => {
            const index = tooltipItems[0]?.dataIndex;
            return tooltipItems[0]?.dataset.labels?.[index] || "";
          },
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw.toFixed(2);
            return `pH: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 0.2,
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  useEffect(() => {
    // Fetch temperature data (param=1)
    fetch("/api/aquawatch/devices/4953335737221120?param=1")
      .then((res) => res.json())
      .then((data) => {
        if (!data?.readings) return;
        const labels = data.readings.map((r: any) => r.timestamp);
        const values = data.readings.map((r: any) => r.value);

        setTempData({
          labels,
          datasets: [
            {
              label: "Temperature",
              data: values,
              borderColor: "rgb(6,182,212)", // Tailwind 'cyan-400' style
              backgroundColor: "rgba(6,182,212,0.2)",
              pointRadius: 0,
              pointHoverRadius: 3,
            },
          ],
        });
      });

    // Fetch pH data (param=17)
    fetch("/api/aquawatch/devices/4953335737221120?param=17")
      .then((res) => res.json())
      .then((data) => {
        if (!data?.readings) return;
        const labels = data.readings.map((r: any) => r.timestamp);
        const values = data.readings.map((r: any) => r.value);

        setPhData({
          labels,
          datasets: [
            {
              label: "pH",
              data: values,
              borderColor: "rgb(245,158,11)", // Tailwind 'amber-500' style
              backgroundColor: "rgba(245,158,11,0.2)",
              pointRadius: 0,
              pointHoverRadius: 3,
            },
          ],
        });
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      {/* Intro Section */}
      <section className="mb-8 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          AquaWatch <span className="text-cyan-600">Monitoring</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Aquawatch, an initiative led by CSIRO, is focused on establishing a
          comprehensive Earth observation-based water quality monitoring and
          forecasting system. By integrating data from satellites, autonomous
          sensors, and other technologies, Aquawatch aims to deliver timely,
          reliable, and actionable information about inland and coastal waters.
        </p>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white border-t border-b border-gray-200 py-6 px-4 mb-8">
        <p className="text-md leading-relaxed max-w-3xl mx-auto text-center">
          We also collect data on <strong>Turbidity</strong>,{" "}
          <strong>Baro</strong>, <strong>pH MV</strong>, <strong>ORP</strong>,{" "}
          <strong>DO</strong>, <strong>% Saturation O₂</strong>,{" "}
          <strong>Partial Pressure O₂</strong>,{" "}
          <strong>Actual Conductivity</strong>,{" "}
          <strong>Specific Conductivity</strong>, <strong>Resistivity</strong>,{" "}
          <strong>Salinity</strong>, <strong>Total Dissolved Solids</strong>,{" "}
          <strong>Density</strong>, <strong>Pressure</strong>, and{" "}
          <strong>Depth</strong>.
        </p>
      </section>

      {/* Charts Section */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          Current Readings
        </h2>

        {/* Two-column layout for charts on md+ screens, single column on smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Temperature Chart Card */}
          <div className="bg-white p-6 rounded-md shadow-md border border-gray-200">
            {tempData ? (
              <Line data={tempData} options={chartTempOptions} />
            ) : (
              <p className="text-gray-500 text-center mt-4">
                Loading temperature data...
              </p>
            )}
          </div>

          {/* pH Chart Card */}
          <div className="bg-white p-6 rounded-md shadow-md border border-gray-200">
            {phData ? (
              <Line data={phData} options={chartPHOptions} />
            ) : (
              <p className="text-gray-500 text-center mt-4">
                Loading pH data...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Get Involved
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Want more detailed data or to collaborate on our water quality
            research efforts?
          </p>
          <button
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
            onClick={() => (window.location.href = "/contact")}
          >
            Request More Information
          </button>
        </div>
      </section>
    </main>
  );
}
