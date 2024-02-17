import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleCheck,
  faUserCheck,
  faComments
} from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        <span className="text-green-700">Cam kết</span> đối với khách hàng
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-md shadow-md">
          <FontAwesomeIcon icon={faUserCheck} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Đáng tin cậy
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis odio vitae, consectetur bibendum
              nunc.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
          <FontAwesomeIcon icon={faFileCircleCheck} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Kiểm duyệt chặt chẽ
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
          <FontAwesomeIcon icon={faComments} className="bg-green-100 text-green-500 w-12 px-3 py-3 mb-4 mr-4 rounded "/>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Hỗ trợ 24/7
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            Đội ngũ của Getins luôn mong muốn tạo ra giá trị cho doanh nghiệp
            của bạn từ những phản hồi có chất lượng của người tham gia phỏng
            vấn. Chúng tôi đảm bảo về{" "}
            <span className="text-green-700 font-bold">chất lượng</span> và{" "}
            <span className="text-green-700 font-bold">tính trung thực</span> của những
            phản hồi đó!
          </p>
          <br></br>
          <h2 className="text-green-700 font-bold text-lg">Đỗ Tuấn Linh</h2>
          <h4 className="text-green-600">CEO - Founder GetIns</h4>
        </div>
      </div>
    </section>
  );
};

export default Feature;
