import Logo from "@/public/getins_logo.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 shadow">
      <div className="mx-auto py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="GetIns Logo" width={120} height={40} />
          <ul className="flex space-x-14 ml-10">
            <li>
              <a href="#" className="text-gray-500 hover:text-black-500">
                Ứng tuyển làm Reviewer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-black-500">
                Chi phí
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-black-500">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="bg-white-500 hover:bg-gray-200 font-bold py-2 px-4 rounded mr-4 border-black border-solid border-opacity-20 border-2 shadow">
            Đăng ký
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
