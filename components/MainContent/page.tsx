"use client";
import React, { useEffect, useState } from "react";
import AntelopeCharts from "../AntelopeCharts/page";
import AntelopeTable from "../AntelopeTable/page";

const MainContent = () => {
    const [data, setData] = useState<any>(null);
    const [sortedData, setSortedData] = useState<any>(null);
    const [sortConfig, setSortConfig] = useState({
        key: "name",
        direction: "asc",
    });

    useEffect(() => {
        fetch("/api/fetch-antelopes")
            .then((response) => response.json())
            .then((data) => {
                const sortedArray = sortArray(
                    data,
                    sortConfig.key,
                    sortConfig.direction
                );
                setData(data);
                setSortedData(sortedArray);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const sortArray = (array: any[], key: string, direction: string) => {
        return array.sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });
    };

    const sortTable = (key: string) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        const sortedArray = sortArray(sortedData, key, direction);
        setSortedData(sortedArray);
        setSortConfig({ key, direction });
    };

    return (
        <section className="w-full" id="content">
            <img src="images/color_swap.png" alt="" className="w-full" />
            <section className="bg-[#B45921] w-full min-h-screen items-center flex flex-col gap-8 px-6 text-white">
                <h2
                    className="text-2xl lg:text-4xl font-bold text-white"
                    id="infos"
                >
                    Lets talk in depth about Antelopes
                </h2>
                <p className="text-white lg:w-[800px] text-center">
                    Antelopes are a group of herbivorous mammals of the family
                    <span className="font-bold text-xl"> Bovidae</span>,
                    distinguished by a lightweight bone structure, slim legs,
                    and a short mane. They are known for their ability to{" "}
                    <span className="font-bold text-xl"> run fast</span> and
                    <span className="font-bold text-xl"> jump high</span>.
                    Antelopes are also known for their keen eyesight and sharp
                    hearing. They are social animals that live in herds and
                    communicate using vocalizations and body language.
                </p>
                <p>And you know what? There are a lot of different species.</p>
                <h3 className="text-xl font-semibold">Have a look !</h3>
                <div>
                    {sortedData ? (
                        <>
                            <AntelopeTable
                                data={sortedData}
                                sortConfig={sortConfig}
                                sortTable={sortTable}
                            />
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </section>
            <img
                src="images/color_swap_reverse.png"
                alt=""
                className="w-full"
            />
            <section>
                <h2
                    className="text-black text-4xl font-semibold text-center"
                    id="stats"
                >
                    Here are some more in depth stats
                </h2>
                {sortedData ? (
                    <AntelopeCharts data={sortedData} />
                ) : (
                    <p>Loading...</p>
                )}
            </section>
        </section>
    );
};

export default MainContent;
