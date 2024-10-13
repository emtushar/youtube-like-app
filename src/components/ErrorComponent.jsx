import React from "react";

function ErrorComponent() {
  return (
    <div>
      <h1 className=" text-2xl text-red-500">
        There is something wrong in fetching data
      </h1>
      <h2 className="text-red-600 font-medium text-xl font-serif mt-20">
        or Api Key might be Expired 😞
      </h2>
    </div>
  );
}

export default ErrorComponent;
