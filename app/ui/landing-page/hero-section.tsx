import Contact from "@/public/contact.jpg";
import Image from "next/image";

export default function HeroSection(){
  return (
    <section className="bg-white py-16">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 items-center">
        <div className="w-full lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-bold text-gray-900">
            Khách hàng thực sự <span className="text-green-500">nghĩ gì</span> về sản phẩm của bạn
          </h2>
          <p className="mt-4 text-gray-500">
            Tiết kiệm tối đa thời gian và chi phí phỏng vấn người dùng
          </p>
          <h3 className="font-bold text-2xl my-5">Đăng kí ngay để tiếp cận phản hồi của khách hàng!</h3>
          <div className="mt-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 mr-4">
              Đăng kí ngay
            </button>
            <button className="bg-white-600 text-black px-6 py-3 rounded-md shadow-md hover:bg-gray-200 border-black border-solid border-opacity-20 border-2">
              Xem thử các tính năng
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
        <Image
          src={Contact}
          alt="Customer Contact Image"
          className="rounded-lg"
        />
        </div>
      </div>
    </section>
  );
};


