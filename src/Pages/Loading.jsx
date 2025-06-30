import React from "react";

const Loading = () => {
  return (
    <div className="bg-[#0f172a] text-gray-300 min-h-screen flex flex-col justify-center items-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-6 shadow-lg shadow-cyan-500/30"></div>
      <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
