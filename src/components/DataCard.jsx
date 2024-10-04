import React from "react";

const DataCard = ({ data }) => {
    const {
        title,
        address1,
        address1Data,
        color,
        address2,
        address2Data,
        address3,
        address3Data,
        address4,
        address4Data,
        address5,
        address5Data,
        upperbound,
    } = data;
    const getUnit = (value) => {
        if (value < 1000) return value;
        else if (value < 1000000) return (value / 1000).toFixed(1) + "k";
        else if (value < 1000000000) return (value / 1000000).toFixed(1) + "M";
        else return (value / 1000000000).toFixed(1) + "B";
    };
    return (
        <div className="bg-white flex flex-col justify-center px-4 py-6 gap-2">
            <div className="flex items-center justify-between ">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="capitalize text-[#ADE2E1] text-xl font-semibold">
                    More
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h3 className="text-md opacity-60">{address1}</h3>
                    <div className="text-md font-bold text-black">
                        {getUnit(address1Data)}
                    </div>
                </div>
                <div className="bg-gray-300/20 rounded-full h-2 w-full relative">
                    <div
                        style={{
                            width: `${(address1Data / upperbound) * 100}%`,
                        }}
                        className={`absolute h-full w-1/2 ${data.color} rounded-full`}
                    ></div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h3 className="text-md opacity-60">{address2}</h3>
                    <div className="text-md font-bold text-black">
                        {getUnit(address2Data)}
                    </div>
                </div>
                <div className="bg-gray-300/20 rounded-full h-2 w-full relative">
                    <div
                        style={{
                            width: `${(address2Data / upperbound) * 100}%`,
                        }}
                        className={`absolute h-full w-1/2 ${data.color} rounded-full`}
                    ></div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h3 className="text-md opacity-60">{address3}</h3>
                    <div className="text-md font-bold text-black">
                        {getUnit(address3Data)}
                    </div>
                </div>
                <div className="bg-gray-300/20 rounded-full h-2 w-full relative">
                    <div
                        style={{
                            width: `${(address3Data / upperbound) * 100}%`,
                        }}
                        className={`absolute h-full w-1/2 ${data.color} rounded-full`}
                    ></div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h3 className="text-md opacity-60">{address4}</h3>
                    <div className="text-md font-bold text-black">
                        {getUnit(address4Data)}
                    </div>
                </div>
                <div className="bg-gray-300/20 rounded-full h-2 w-full relative">
                    <div
                        style={{
                            width: `${(address4Data / upperbound) * 100}%`,
                        }}
                        className={`absolute h-full w-1/2 ${data.color} rounded-full`}
                    ></div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h3 className="text-md opacity-60">{address5}</h3>
                    <div className="text-md font-bold text-black">
                        {getUnit(address5Data)}
                    </div>
                </div>
                <div className="bg-gray-300/20 rounded-full h-2 w-full relative">
                    <div
                        style={{
                            width: `${(address5Data / upperbound) * 100}%`,
                        }}
                        className={`absolute h-full w-1/2 ${data.color} rounded-full`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default DataCard;
