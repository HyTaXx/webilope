import React, { useState } from "react";

const AntelopeTable = ({
    data,
    sortConfig,
    sortTable,
}: {
    data: any[];
    sortConfig: any;
    sortTable: (key: string) => void;
}) => {
    const [rowsToShow, setRowsToShow] = useState(5);

    const handleSeeMore = () => {
        setRowsToShow(data.length);
    };

    const handleSeeLess = () => {
        setRowsToShow(5);
    };

    return (
        <>
            <table className="min-w-full table-auto border border-gray-200 text-sm lg:text-lg ">
                <thead className="text-black">
                    <tr>
                        {["name", "continent", "weight", "height", "horns"].map(
                            (key) => (
                                <th
                                    key={key}
                                    className="py-2 px-1 lg:px-4 border-b border-gray-200 bg-gray-50 cursor-pointer lg:w-[150px] items-center justify-between"
                                    onClick={() => sortTable(key)}
                                >
                                    <span className="flex items-center">
                                        {key.charAt(0).toUpperCase() +
                                            key.slice(1)}
                                        {sortConfig.key === key && (
                                            <span className="ml-2">
                                                {sortConfig.direction ===
                                                "asc" ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 15l7-7 7 7"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                )}
                                            </span>
                                        )}
                                    </span>
                                </th>
                            )
                        )}
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 w-[150px]">
                            Picture
                        </th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {data
                        .slice(0, rowsToShow)
                        .map((antelope: any, index: number) => (
                            <tr key={index}>
                                <td className="py-2 border-b border-gray-200 font-semibold">
                                    {antelope.name}
                                </td>
                                <td className="py-2 border-b border-gray-200">
                                    {antelope.continent}
                                </td>
                                <td className="py-2 border-b border-gray-200">
                                    {antelope.weight}
                                </td>
                                <td className="py-2 border-b border-gray-200">
                                    {antelope.height}
                                </td>
                                <td className="py-2 border-b border-gray-200">
                                    {antelope.horns}
                                </td>
                                <td className="py-2 border-b border-gray-200">
                                    <img
                                        src={antelope.picture}
                                        alt={antelope.name}
                                        className="w-20 h-auto rounded-sm"
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {rowsToShow < data.length ? (
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-white text-black py-2 px-4 rounded font-semibold"
                        onClick={handleSeeMore}
                    >
                        See More
                    </button>
                </div>
            ) : (
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-white text-black py-2 px-4 rounded font-semibold"
                        onClick={handleSeeLess}
                    >
                        See Less
                    </button>
                </div>
            )}
        </>
    );
};

export default AntelopeTable;
