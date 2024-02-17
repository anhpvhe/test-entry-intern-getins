import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/about-image.jpg"; // Replace this with the path to your actual image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faFileCircleCheck,
  faChartLine,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 lg:py-24 px-8 lg:px-16 bg-white">
      <div className="w-full lg:w-1/2">
        <Image src={aboutImage} alt="About Us Image" className="rounded-lg" />
      </div>
      <div className="w-full lg:w-1/2 text-gray-800">
        <h3 className="text-3xl lg:text-4xl font-bold mb-7">
          Chúng tôi <span className="text-green-500">phục vụ</span> doanh nghiệp
          của bạn như thế nào?
        </h3>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUserGroup} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
          <p className="mb-4 font-bold text-2xl items-end">
            20,000+ người sẵn sàng làm phỏng vấn
          </p>
        </div>

        <p className="text-lg mb-4 text-gray-500">
          Lorem ipsum dolor sit amet consecteturole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFileCircleCheck} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
          <p className="mb-4 font-bold text-2xl items-end">
            Phản hồi được kiểm duyệt kỹ
          </p>
        </div>
        <p className="text-lg mb-4 text-gray-500">
          Lorem ipsum dolor sit amet consecte turole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChartLine} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
          <p className="mb-4 font-bold text-2xl items-end">
          Báo cáo phân tích chi tiết
          </p>
        </div>
        <p className="text-lg mb-4 text-gray-500">
          Lorem ipsum dolor sit amet consecte turole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHandshake} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
          <p className="mb-4 font-bold text-2xl items-end">
          Cam kết đồng hành
          </p>
        </div>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consecte turole adipiscing elit semper
          dalaracc lacus velolte facilisis volutpat est velitolm.
        </p>
      </div>
    </div>
  );
};

export default About;
