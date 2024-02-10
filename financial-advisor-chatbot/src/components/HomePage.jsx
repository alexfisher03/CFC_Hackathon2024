import React from "react";
import image from "../assets/CredditSpotterLogo.png";

const HomePage = () => {
  return (
    <body>
      <div className="fixed w-full h-[150px] flex justify-around items-center px-4 bg-[#091824] text-grey-300">
        <img src={image} style={{ width: "400px" }} />
        <p className="text-left md:text-center">
          <h1 class="text-white">Created by:</h1>
          <div class="name_credit">
            <ul className="text-lg font-bold">
              <li>
                <a
                  class="text-white hover:underline"
                  href="https://github.com/alexfisher03"
                  target="_blank"
                >
                  Alex
                </a>
              </li>
              <li>
                <a
                  class="text-white hover:underline "
                  href="https://github.com/Maykur"
                  target="_blank"
                >
                  Julian
                </a>
              </li>
              <li>
                <a
                  class="text-white hover:underline"
                  href="https://github.com/Leo-Graham"
                  target="_blank"
                >
                  Leo
                </a>
              </li>
              <li>
                <a
                  class="text-white hover:underline"
                  href="https://github.com/j-frankel"
                  target="_blank"
                >
                  Jacob
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
      <div className="h-[150px]"></div>
    </body>
  );
};

export default HomePage;
