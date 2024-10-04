import React from "react";
import { FaDiscord } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import DataCard from "./DataCard";
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
    return (
        <div className="h-screen overflow-y-scroll">
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
                <div className=" text-white  w-full h-10 flex items-center justify-between px-4 rounded-lg mt-2 bg-white ">
                    {/* Left side buttons */}
                    <div className="flex items-center space-x-4 ">
                        <button className="hover:bg-sea-green-p h-7 text-black py-1 rounded-md hover:text-white px-4 focus:bg-sea-green-p flex items-center justify-center">
                            <span className="text-xs">BASIC</span>
                        </button>

                        <button className=" hover:bg-sea-green-p h-7  text-black hover:text-white px-4 py-1 rounded-md  bg-sea-green-p flex items-center justify-center">
                            <span className="text-xs">ADVANCED</span>
                        </button>
                    </div>
                    text-black hover:text-white
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
                <div className="pt-2 w-[85vw] flex justify-center gap-2 items-center">
                    <div className="h-[30vh] w-[40vw] ">
                        <nav className="bg-white text-black h-10 flex items-center justify-between px-6 ">
                            {/* Left side: Title */}
                            <div className="text-sm font-bold ">Client</div>

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
            </div>
            {/* data below charts */}
            <div className="grid grid-rows-2 grid-cols-2 bg-[#F7F8FA] gap-4">
                {values.map((value, index) => (
                    <DataCard key={index} data={value} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
