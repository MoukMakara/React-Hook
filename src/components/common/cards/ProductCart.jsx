import React from "react";

export default function ProductCart({ image, title, price, description }) {
  return (
    <>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt={title}
                  height="100"
                  src={
                    image ||
                    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
                  }
                  width="100"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-2xl truncate font-medium text-gray-900 dark:text-white">
                  {title || "No title"}
                </p>
                <p className="truncate text-base text-gray-500 dark:text-gray-400">
                  {description || "No description"}
                </p>
              </div>
              <div className="text-2xl inline-flex items-center font-semibold text-gray-900 dark:text-white">
                {price ? price : "unavailable"} $
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
