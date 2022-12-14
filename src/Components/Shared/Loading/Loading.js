import React from "react";

const Loading = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <div class="flex items-center justify-center ">
            <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
