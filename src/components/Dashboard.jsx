import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import DataCard from "./DataCard";
import { RiBarChartFill } from "react-icons/ri";
import { PiClockCounterClockwise } from "react-icons/pi";

import { IoIosInformationCircleOutline } from "react-icons/io";
import MapChart from "./MapChart";
function getRandomColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD433"]; // Add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
}

const values = [
    {
        title: "Referring Site",
        color: "bg-blue-500",
        address1: "121.40.112.77",
        address1Data: "105",
        address2: "121.40.112.77",
        address2Data: "105",
        address3: "121.40.112.77",
        address3Data: "105",
        address4: "121.40.112.77",
        address4Data: "24",
        address5: "121.40.112.77",
        address5Data: "19",
        upperbound: "105", // we can change depending on the data
    },
    {
        title: "Referring Site",
        color: "bg-[#FCD26C]",
        address1: "121.40.112.77",
        address1Data: "105",
        address2: "121.40.112.77",
        address2Data: "105",
        address3: "121.40.112.77",
        address3Data: "105",
        address4: "121.40.112.77",
        address4Data: "24",
        address5: "121.40.112.77",
        address5Data: "19",
        upperbound: "105", // we can change depending on the data
    },
    {
        title: "Referring Site",
        color: "bg-[#11C4C2]",
        address1: "121.40.112.77",
        address1Data: "105",
        address2: "121.40.112.77",
        address2Data: "105",
        address3: "121.40.112.77",
        address3Data: "105",
        address4: "121.40.112.77",
        address4Data: "24",
        address5: "121.40.112.77",
        address5Data: "19",
        upperbound: "105", // we can change depending on the data
    },
    {
        title: "Referring Site",
        color: "bg-[#FCD26C]",
        address1: "121.40.112.77",
        address1Data: "105",
        address2: "121.40.112.77",
        address2Data: "105",
        address3: "121.40.112.77",
        address3Data: "105",
        address4: "121.40.112.77",
        address4Data: "24",
        address5: "121.40.112.77",
        address5Data: "19",
        upperbound: "105", // we can change depending on the data
    },
];
const Dashboard = () => {
    const [selected, setSelected] = useState("");
    return (
        <div className="h-screen overflow-y-scroll bg-light-gray-neon-p">
            <div className="h-[50vh] w-full bg-light-gray-neon-p ">
                <nav className="bg-light-gray-neon-p  h-14 flex items-center justify-between px-6 ">
                    <div className="text-xl ">Dashboard</div>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center gap-2  bg-blue-200 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                            <FaDiscord className="text-blue-600 text-sm" />
                            <span className="text-sm text-blue-600">
                                Discord
                            </span>
                        </button>

                        <button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-600">
                            <GiClothes className="" />
                        </button>

                        <button className="flex items-center  px-4 py-2 rounded-md hover:bg-red-500">
                            <FiLogOut className="" />
                        </button>
                    </div>
                </nav>
                <div className=" text-white  w- h-10 flex items-center justify-between px-4 rounded-lg mt-2 bg-white shadow-3xl ml-1">
                    {/* Left side buttons */}
                    <div className="flex items-center space-x-4 ">
                        <button
                            onClick={() => setSelected("basic")}
                            className={`hover:bg-sea-green-p h-7 text-black py-1 rounded-md hover:text-white px-4 focus:bg-sea-green-p flex items-center justify-center ${
                                selected === "basic"
                                    ? "bg-sea-green-p text-white"
                                    : "bg-white"
                            }`}
                        >
                            <span className="text-xs">BASIC</span>
                        </button>

                        <button
                            onClick={() => setSelected("advanced")}
                            className={` hover:bg-sea-green-p h-7  text-black hover:text-white px-4 py-1 rounded-md  bg-sea-green-p flex items-center justify-center ${
                                selected === "advanced"
                                    ? "bg-sea-green-p text-white"
                                    : "bg-white"
                            }`}
                        >
                            <span className="text-xs">ADVANCED</span>
                        </button>
                    </div>
                    {/* Right side buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="hover:bg-sea-green-p h-7 text-black hover:text-white px-4 py-1 rounded-md bg-sea-green-p   flex items-center justify-center">
                            <span className="text-xs">24 HOURS</span>
                        </button>
                        <button className="hover:bg-sea-green-p h-7 text-black hover:text-white px-4 py-1 rounded-md  flex items-center justify-center">
                            <span className="text-xs">7 DAYS</span>
                        </button>
                        <button className="hover:bg-sea-green-p h-7 text-black hover:text-white px-4 py-1 rounded-md  flex items-center justify-center">
                            <span className="text-xs">30 DAYS</span>
                        </button>
                    </div>
                </div>
                {selected === "advanced" && (
                    <div className="pt-2 w-[85vw] flex justify-center gap-2 items-center">
                        <div className="h-[30vh] w-[40vw] ">
                            <nav className="bg-white text-black h-10 flex items-center justify-between px-6 ">
                                {/* Left side: Title */}
                                <div className="text-sm  ">Client</div>

                                {/* Right side: Buttons */}
                                <div className="flex items-center space-x-4 text-sea-green-p">
                                    MORE
                                </div>
                            </nav>
                            <div className="flex items-center justify-center bg-white w-full py-4 px-2">
                                <div className=" h-32 w-[10vw] flex items-center justify-center">
                                    <span className="text-white">
                                        <img
                                            src="/images/chart1_img.webp"
                                            alt="chart_2 img "
                                            className="h-full w-full p-4 "
                                        />
                                    </span>
                                </div>

                                <div className=" h-32 w-[20vw] flex bg-light-gray-neon-p ">
                                    <div className="flex-1 justify-center items-center   border-gray-400">
                                        <ul className="text-white list-disc  p-1 ">
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Div 2 */}
                                    <div className="flex-1 justify-center items-center   border-gray-400">
                                        <ul className="text-white list-disc  p-1 ">
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                            <li className="flex justify-between">
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-2 h-2 rounded-full mr-2"
                                                        style={{
                                                            backgroundColor:
                                                                getRandomColor(),
                                                        }}
                                                    ></div>
                                                    <span className="text-sea-green-p text-xs">
                                                        macOS
                                                    </span>
                                                </div>
                                                <span className="text-black font-bold">
                                                    21.0k
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[30vh] w-[30vw] bg-white ">
                            <nav className=" text-white h-10 flex items-center justify-between px-6 ">
                                {/* Left side: Title */}
                                <div className="text-sm text-black font-bold ">
                                    Response Status
                                </div>

                                {/* Right side: Buttons */}
                                <div className="flex items-center space-x-4 text-sea-green-p">
                                    MORE
                                </div>
                            </nav>
                            <div className="flex p-4">
                                {/* First Child Div (30% width) */}
                                <div className=" w-[40%]  h-32 flex items-center justify-center">
                                    <span className="text-white">
                                        <img
                                            src="/images/chart2_img.webp"
                                            alt="chart_1 img "
                                            className="h-full w-full p-4"
                                        />
                                    </span>
                                </div>

                                {/* Second Child Div (70% width) */}
                                <div className=" w-[60%] justify-center items-center bg-light-gray-neon-p ">
                                    <ul className="text-white list-disc p-1">
                                        <li className="flex justify-between">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-2 h-2 rounded-full mr-2"
                                                    style={{
                                                        backgroundColor:
                                                            getRandomColor(),
                                                    }}
                                                ></div>
                                                <span className="text-sea-green-p text-xs">
                                                    macOS
                                                </span>
                                            </div>
                                            <span className="text-black font-bold">
                                                21.0k
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-2 h-2 rounded-full mr-2"
                                                    style={{
                                                        backgroundColor:
                                                            getRandomColor(),
                                                    }}
                                                ></div>
                                                <span className="text-sea-green-p text-xs">
                                                    macOS
                                                </span>
                                            </div>
                                            <span className="text-black font-bold">
                                                21.0k
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-2 h-2 rounded-full mr-2"
                                                    style={{
                                                        backgroundColor:
                                                            getRandomColor(),
                                                    }}
                                                ></div>
                                                <span className="text-sea-green-p text-xs">
                                                    macOS
                                                </span>
                                            </div>
                                            <span className="text-black font-bold">
                                                21.0k
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-2 h-2 rounded-full mr-2"
                                                    style={{
                                                        backgroundColor:
                                                            getRandomColor(),
                                                    }}
                                                ></div>
                                                <span className="text-sea-green-p text-xs">
                                                    macOS
                                                </span>
                                            </div>
                                            <span className="text-black font-bold">
                                                21.0k
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <div className="flex items-center">
                                                <div
                                                    className="w-2 h-2 rounded-full mr-2"
                                                    style={{
                                                        backgroundColor:
                                                            getRandomColor(),
                                                    }}
                                                ></div>
                                                <span className="text-sea-green-p text-xs">
                                                    macOS
                                                </span>
                                            </div>
                                            <span className="text-black font-bold">
                                                21.0k
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="h-[30vh] w-[30vw] bg-white">
                            <nav className="bg-white text-white h-10 flex items-center justify-between px-6 ">
                                {/* Left side: Title */}
                                <div className="flex items-center gap-2">
                                    <div className="text-sm font-bold text-black ">
                                        Query per second
                                    </div>
                                    <button className="flex items-center space-x-1 text-sea-green-p">
                                        <FaThumbsUp />
                                        <span>0</span>
                                    </button>
                                </div>

                                {/* Right side: Buttons */}
                                <div className="flex items-center space-x-4">
                                    {/* Discord Button */}

                                    {/* Exit/Logout Button */}
                                    <button className="flex items-center  px-4 py-2 rounded-md hover:bg-red-500">
                                        <FiClock className="text-sea-green-p" />
                                    </button>
                                </div>
                            </nav>
                            <div className="w-full h-32 mt-4 ">
                                <span>
                                    <img
                                        src="/images/graph.webp"
                                        alt=""
                                        className="h-full w-full px-4"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                {selected === "basic" && (
                    <div className="grid grid-rows-2 grid-cols-7 gap-4 h-[30vh] mt-4 mx-1">
                        <div className="col-start-1 col-end-3 flex flex-col justify-between items-start p-4 bg-white rounded-sm shadow-3xl">
                            <h2 className="opacity-50 text-[14px]">Requests</h2>
                            <span className="text-2xl opacity-75">103</span>
                        </div>
                        <div className="col-start-3 col-end-5 bg-white rounded-sm shadow-3xl flex items-center justify-between p-4 gap-2 ">
                            <div className="w-[49%] flex flex-col justify-between items-start">
                                <h2 className="opacity-50 text-[14px]">
                                    Today Blocked
                                </h2>
                                <span className="text-2xl opacity-75 text-[#FFBF19] text-md flex items-end gap-2">
                                    57{" "}
                                    <span className="text-sea-green-p -translate-y-[3px]">
                                        <IoIosInformationCircleOutline
                                            size={16}
                                        />
                                    </span>
                                </span>
                            </div>
                            <div className=" border-l-[1px] pl-4 border-grey-400 h-12"></div>
                            <div className="w-[49%] flex flex-col justify-between ">
                                <h2 className="opacity-50 text-[14px]">
                                    Today Attack IP
                                </h2>
                                <span className="text-2xl opacity-75 text-[#FFBF19] text-md">
                                    9
                                </span>
                            </div>
                        </div>
                        <div className="col-start-5 col-end-8 row-start-1 row-end-3 bg-white rounded-sm shadow-3xl p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex  items-center gap-2">
                                    <h1>Query Per Second</h1>
                                    <div className="bg-gray-200/55 text-sea-green-p scale-75 w-fit px-2 py-1 rounded-md flex items-center justify-between gap-2">
                                        {" "}
                                        <RiBarChartFill />{" "}
                                        <span className="text-black">0</span>
                                    </div>
                                </div>
                                <div className="text-sea-green-p scale-125">
                                    <PiClockCounterClockwise />
                                </div>
                            </div>
                            <div className="border-b-4 border-sea-green-p w-full h-3/4 border-dashed">
                                <div className="h-full w-2 translate-y-1 ml-[118px] bg-sea-green-p rounded-sm"></div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-5 row-start-2 row-end-3 bg-white rounded-sm shadow-3xl flex items-center justify-between p-4 gap-2">
                            <div className="w-[49%] flex flex-col justify-between items-start">
                                <h2 className="opacity-50 text-[14px]">
                                    4xx Errors
                                </h2>
                                <span className="text-2xl opacity-75  text-md flex items-end gap-2">
                                    85
                                </span>
                            </div>
                            <div className=" border-l-[1px] pl-4 border-grey-400 h-12"></div>
                            <div className="w-[49%] flex flex-col justify-between ">
                                <h2 className="opacity-50 text-[14px]">
                                    4xx Errors
                                </h2>
                                <span className="text-2xl opacity-75  text-md">
                                    82.52%
                                </span>
                            </div>
                            <div className=" border-l-[1px] pl-4 border-grey-400 h-12"></div>
                            <div className="w-[49%] flex flex-col justify-between ">
                                <h2 className="opacity-50 text-[14px]">
                                    5xx Errors
                                </h2>
                                <span className="text-2xl opacity-75  text-md">
                                    0
                                </span>
                            </div>
                            <div className=" border-l-[1px] pl-4 border-grey-400 h-12"></div>
                            <div className="w-[49%] flex flex-col justify-between ">
                                <h2 className="opacity-50 text-[14px]">
                                    5xx Errors
                                </h2>
                                <span className="text-2xl opacity-75  text-md">
                                    0%
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* data below charts */}
            {selected === "advanced" && (
                <div className="grid grid-rows-2 grid-cols-2 bg-[#F7F8FA] gap-4">
                    {values.map((value, index) => (
                        <DataCard key={index} data={value} />
                    ))}
                </div>
            )}

            <div className="bg-grey-400">
                {selected === "basic" && (
                    <div className="flex gap-2">
                        <div className="w-[80%] p-4 shadow-3xl bg-white">
                            <div className="flex  flex-col">
                                <div className="flex items-center self-end justify-center bg-white w-fit p-1 rounded-md  border-[1px] border-grey-200">
                                    <button className="hover:bg-sea-green-p h-7 text-black py-1 rounded-md hover:text-white px-4 focus:bg-sea-green-p flex items-center justify-center bg-sea-green-p text-white">
                                        REQUESTS
                                    </button>
                                    <button className="hover:bg-sea-green-p h-7 text-black py-1 rounded-md hover:text-white px-4 focus:bg-sea-green-p flex items-center justify-center">
                                        BLOCKED
                                    </button>
                                </div>
                                <div className="flex mt-10">
                                    <div className="w-[70%]">
                                        <MapChart />
                                    </div>
                                    <div className="w-[30%] flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-md opacity-60">
                                                    China
                                                </h3>
                                                <div className="text-md  text-black">
                                                    272488
                                                </div>
                                            </div>
                                            <div className="bg-gray-300/20 rounded-full h-[4px] w-full relative">
                                                <div
                                                    style={{
                                                        width: `${
                                                            (272488 / 272488) *
                                                            100
                                                        }%`,
                                                    }}
                                                    className={`absolute h-full w-1/2 bg-sea-green-p rounded-full`}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-md opacity-60">
                                                    Indonesia
                                                </h3>
                                                <div className="text-md  text-black">
                                                    272488
                                                </div>
                                            </div>
                                            <div className="bg-gray-300/20 rounded-full h-[4px] w-full relative">
                                                <div
                                                    style={{
                                                        width: `${
                                                            (272488 / 272488) *
                                                            100
                                                        }%`,
                                                    }}
                                                    className={`absolute h-full w-1/2 bg-sea-green-p rounded-full`}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-md opacity-60">
                                                    Brazil
                                                </h3>
                                                <div className="text-md  text-black">
                                                    272488
                                                </div>
                                            </div>
                                            <div className="bg-gray-300/20 rounded-full h-[4px] w-full relative">
                                                <div
                                                    style={{
                                                        width: `${
                                                            (272488 / 272488) *
                                                            100
                                                        }%`,
                                                    }}
                                                    className={`absolute h-full w-1/2 bg-sea-green-p rounded-full`}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-md opacity-60">
                                                    India
                                                </h3>
                                                <div className="text-md  text-black">
                                                    272488
                                                </div>
                                            </div>
                                            <div className="bg-gray-300/20 rounded-full h-[4px] w-full relative">
                                                <div
                                                    style={{
                                                        width: `${
                                                            (272488 / 272488) *
                                                            100
                                                        }%`,
                                                    }}
                                                    className={`absolute h-full w-1/2 bg-sea-green-p rounded-full`}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between">
                                                <h3 className="text-md opacity-60">
                                                    Argentina
                                                </h3>
                                                <div className="text-md  text-black">
                                                    272488
                                                </div>
                                            </div>
                                            <div className="bg-gray-300/20 rounded-full h-[4px] w-full relative">
                                                <div
                                                    style={{
                                                        width: `${
                                                            (272488 / 272488) *
                                                            100
                                                        }%`,
                                                    }}
                                                    className={`absolute h-full w-1/2 bg-sea-green-p rounded-full`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[18%]  p-4 shadow-3xl bg-white">
                            <h1>Today Summary</h1>
                            <div className="flex flex-col gap-2 mt-10">
                                <h1 className="opacity-50 text-sm ">
                                    Page View
                                </h1>
                                <div className="text-xl">103</div>
                                <img
                                    className="w-3/4 mx-auto"
                                    src="/graph.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-10">
                                <h1 className="opacity-50 text-sm ">
                                    User View
                                </h1>
                                <div className="text-xl">53</div>
                                <img
                                    className="w-3/4 mx-auto"
                                    src="/graph.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
