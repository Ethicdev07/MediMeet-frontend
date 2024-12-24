// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* {---left side---} */}
        <div>
          <div className='w-[100px] cursor-pointer flex text-3xl'>
            <img className="mt-[-20px]" src={assets.medimeetlogo} alt="" />
            <p className="font-bold text-primary">MediMeet</p>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim amet
            sint et, necessitatibus deleniti voluptatum, voluptate earum
            quisquam fugit voluptas repellendus. Asperiores illum nulla
            voluptatem fugiat harum corrupti unde quidem. Omnis, molestias? Quam
            ipsam quo iusto, fugiat tenetur itaque quisquam.
          </p>
        </div>

        {/* {---middle ---} */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* {---right side---} */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+234-817-436-007</li>
            <li>Ethicdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* {----copyright---} */}

      <div>
        <hr />
        <p className="py-5 text-sm text-gray-600 text-center">Copyright @2024 MediMeet- All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
