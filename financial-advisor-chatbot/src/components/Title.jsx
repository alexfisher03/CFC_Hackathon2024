import React from "react";
import image from "../assets/CredditSpotterLogo.png";

const Title = () => {
  return (
    <div>
      <div className="fixed w-full h-[150px] flex justify-around items-center px-4 bg-[#091824] text-grey-300">
        <div>
          <a href="http://localhost:3000/">
            <img
              class="hover:scale-110 duration-300"
              src={image}
              style={{ width: "400px" }}
            />
          </a>
        </div>
        <div className="text-left md:text-center">
          <h1 class="text-slate-400">Created by:</h1>
          <div class="name_credit">
            <ul className="text-lg font-bold">
              <li>
                <a
                  class="text-slate-500 hover:text-white duration-300"
                  href="https://github.com/alexfisher03"
                  target="_blank"
                >
                  Alexander Fisher
                </a>
              </li>
              <li>
                <a
                  class="text-slate-500 hover:text-white duration-300"
                  href="https://github.com/Maykur"
                  target="_blank"
                >
                  Julian Garcia
                </a>
              </li>
              <li>
                <a
                  class="text-slate-500 hover:text-white duration-300"
                  href="https://github.com/Leo-Graham"
                  target="_blank"
                >
                  Leo Graham
                </a>
              </li>
              <li>
                <a
                  class="text-slate-500 hover:text-white duration-300"
                  href="https://github.com/j-frankel"
                  target="_blank"
                >
                  Jacob Frankel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[150px]"></div>
    </div>
  );
};

export default Title;
