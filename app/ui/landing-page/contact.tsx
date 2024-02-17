import React from "react";
import Image from "next/image";
import contactImage from "../../../public/contact.jpg"; // Replace this with the path to your actual image

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 lg:py-24 px-8 lg:px-16 bg-gray-100">
      <div className="w-full lg:w-1/2 text-gray-800">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
          Bạn thực sự muốn <span className="text-green-500">hiểu hơn</span> về
          khách hàng?
        </h2>
        <p className="text-lg mb-14 text-gray-400">Hãy để chúng tôi giúp bạn!</p>
        <div className="flex mt-4">
          <button className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Đăng ký ngay
          </button>
          <button className="bg-white text-black font-bold py-2 px-4 rounded border border-black hover:bg-gray-200 focus:outline-none focus:shadow-outline">
            Xem thử tính năng
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={contactImage}
          alt="Customer Contact Image"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
