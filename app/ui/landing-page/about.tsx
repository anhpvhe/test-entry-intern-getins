import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/about-image.jpg"; // Replace this with the path to your actual image

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 lg:py-24 px-8 lg:px-16 bg-white">
      <div className="w-full lg:w-1/2">
        <Image
          src={aboutImage}
          alt="About Us Image"
          className="rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 text-gray-800">
        <h3 className="text-3xl lg:text-4xl font-bold mb-7">
          Chúng tôi <span className="text-green-500">phục vụ</span> doanh nghiệp của bạn như thế nào?
        </h3>
        <p className="mb-4 font-bold text-2xl">20,000+ người sẵn sàng làm phỏng vấn</p>
        <p className="text-lg mb-4 text-gray-500">
          Lorem ipsum dolor sit amet consecteturole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
        <p className="text-2xl mb-4 font-bold">Phản hồi được kiểm duyệt kỹ</p>
        <p className="text-lg mb-4 text-gray-500">
          Lorem ipsum dolor sit amet consecte turole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
        <p className="text-2xl mb-4 font-bold">Báo cáo phân tích chi tiết</p>
        <p className="text-lg mb-4 text-gray-500">
          Lorem ipsum dolor sit amet consecte turole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
        <p className="text-2xl mb-4 font-bold">Cam kết đồng hành</p>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consecte turole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
      </div>
    </div>
  );
};

export default About;
