import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const AntelopeCharts = ({ data }: { data: any[] }) => {
    const getChartData = () => {
        const labels = data.map((antelope: any) => antelope.name);
        const weightData = data.map((antelope: any) => antelope.weight);
        const heightData = data.map((antelope: any) => antelope.height);
        const continents = data.reduce((acc: any, antelope: any) => {
            acc[antelope.continent] = (acc[antelope.continent] || 0) + 1;
            return acc;
        }, {});

        return {
            barChartData: {
                labels,
                datasets: [
                    {
                        label: "Weight (lbs)",
                        data: weightData,
                        backgroundColor: "rgba(4, 27, 21, 1)",
                        borderColor: "rgba(4, 27, 21, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "Height (inches)",
                        data: heightData,
                        backgroundColor: "rgba(28, 159, 28, 1)",
                        borderColor: "rgba(28, 159, 28, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            pieChartData: {
                labels: Object.keys(continents),
                datasets: [
                    {
                        data: Object.values(continents),
                        backgroundColor: [
                            "rgba(28, 159, 28, 1)",
                            "rgba(4, 27, 21, 1)",
                        ],
                        borderColor: [
                            "rgba(28, 159, 28, 1)",
                            "rgba(4, 27, 21, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
        };
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "black",
                },
            },
            title: {
                display: true,
                text: "",
                color: "black",
            },
            tooltip: {
                titleColor: "white",
                bodyColor: "white",
                footerColor: "black",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "black",
                },
                title: {
                    color: "black",
                },
            },
            y: {
                ticks: {
                    color: "black",
                },
                title: {
                    color: "black",
                },
            },
        },
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-around gap-8 mt-8 items-center pb-8">
            <div className="lg:w-[600px]">
                <Bar
                    data={getChartData().barChartData}
                    options={{
                        ...chartOptions,
                        plugins: {
                            ...chartOptions.plugins,
                            title: {
                                ...chartOptions.plugins.title,
                                text: "Antelope Weight and Height",
                            },
                        },
                    }}
                />
            </div>
            <div className="lg:w-[500px]">
                <Pie
                    data={getChartData().pieChartData}
                    options={{
                        ...chartOptions,
                        plugins: {
                            ...chartOptions.plugins,
                            title: {
                                ...chartOptions.plugins.title,
                                text: "Antelope Distribution by Continent",
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default AntelopeCharts;
