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
  ChartOptions,
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

  const chartTempOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: "Temperature",
        font: { size: 32 },
      },
      tooltip: {
        enabled: true,
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
  };

  const chartPHOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: "pH",
        font: { size: 32 },
      },
      tooltip: {
        enabled: true,
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
        <h1 className="text-4xl font-semibold mb-4">
          AquaWatch <span className="text-cyan-600">Monitoring</span>
        </h1>
        <p className="text-md max-w-2xl mx-auto">
          AquaWatch, a CSIRO-led initiative, delivers continuous water quality
          monitoring through state-of-the-art Earth observation and sensor data.
          By integrating satellite imagery, autonomous sensors, and modern
          forecasting methods, AquaWatch provides timely, accurate, and
          actionable insights for both inland and coastal waters.
        </p>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white border-t border-b border-gray-200 py-6 px-4 mb-8">
        <p className="text-sm leading-relaxed max-w-3xl mx-auto text-center">
          In addition to standard measurements, AquaWatch tracks vital water
          quality parameters such as <strong>Turbidity</strong>,{" "}
          <strong>Barometric Pressure</strong>,<strong>pH</strong>,{" "}
          <strong>Oxidation-Reduction Potential (ORP)</strong>,
          <strong>Dissolved Oxygen (DO)</strong>,{" "}
          <strong>% O₂ Saturation</strong>,
          <strong>Partial Pressure of O₂</strong>,{" "}
          <strong>Actual Conductivity</strong>,
          <strong>Specific Conductivity</strong>, <strong>Resistivity</strong>,
          <strong>Salinity</strong>, <strong>Total Dissolved Solids</strong>,
          <strong>Density</strong>, <strong>Pressure</strong>,{" "}
          <strong>Depth</strong>, and
          <strong>Colored Dissolved Organic Matter (CDOM)</strong>.
        </p>
      </section>

      {/* Charts Section */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          Current AquaWatch Readings
        </h2>
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

      <p className="mt-8 text-center text-sm text-gray-500">
        AquaWatch data sourced from{" "}
        <a
          href="https://www.csiro.au/en/about/challenges-missions/aquawatch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          AquaWatch Australia
        </a>
      </p>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-lg font-semibold my-2 text-gray-700">
            Join Our Initiative
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            Interested in accessing detailed water quality data or collaborating
            on innovative research? Contact us to learn more about our efforts.
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
