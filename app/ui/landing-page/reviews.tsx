import Image from "next/image";
import GoogleLogo from "@/public/google-logo.jpg";
import YoutubeLogo from "@/public/youtube-logo.jpg";
import HpLogo from "@/public/hp-logo.jpg";
import MicrosoftLogo from "@/public/microsoft-logo.jpg";
import AcerLogo from "@/public/acer-logo.jpg";
import LenovoLogo from "@/public/lenovo-logo.jpg";
import ProfileImage from "@/public/admin-profile.jpg";
import TopCVLogo from "@/public/Logo_TopCV.png";

export default function Review() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          <span className="text-green-500">Khách hàng</span> của chúng tôi
        </h3>
        {/*insert brands logo here*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="flex justify-center items-center p-8 mb-6 ">
            <Image
              src={GoogleLogo}
              alt="Google Logo"
              width={250}
              height={250}
            />
          </div>
          <div className="flex justify-center items-center p-8 mb-6 ">
            <Image
              src={YoutubeLogo}
              alt="YouTube Logo"
              width={250}
              height={250}
            />
          </div>
          <div className="flex justify-center items-center p-8 mb-6">
            <Image src={HpLogo} alt="HP Logo" width={250} height={250} />
          </div>
          <div className="flex justify-center items-center p-8 mb-6">
            <Image
              src={MicrosoftLogo}
              alt="Microsoft Logo"
              width={250}
              height={250}
            />
          </div>
          <div className="flex justify-center items-center p-8 mb-6">
            <Image src={AcerLogo} alt="Acer Logo" width={250} height={250} />
          </div>
          <div className="flex justify-center items-center p-8 mb-6">
            <Image
              src={LenovoLogo}
              alt="Lenovo Logo"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-green-600 text-white p-6 pb-0 rounded-md shadow-md">
            <p className="">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis odio vitae, consectetur bibendum
              nunc."
            </p>
            {/*insert profile logo*/}
            <div className="flex mt-6 items-center">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="">Anh Trần Trung Hiếu</p>
                <p className="">CEO TopCV</p>
              </div>
              <Image src={TopCVLogo} alt="TopCV_Logo" width={50} height={50} className="ml-auto"/>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-green-600 text-white p-6 rounded-md shadow-md">
            <p className="">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis odio vitae, consectetur bibendum
              nunc."
            </p>
            {/*insert profile logo*/}
            <div className="flex mt-6 items-center">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="">Anh Trần Trung Hiếu</p>
                <p className="">CEO TopCV</p>
              </div>
              <Image src={TopCVLogo} alt="TopCV_Logo" width={50} height={50} className="ml-auto"/>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-green-600 text-white p-6 rounded-md shadow-md">
            <p className="">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis odio vitae, consectetur bibendum
              nunc."
            </p>
            {/*insert profile logo*/}
            <div className="flex mt-6 items-center">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="">Anh Trần Trung Hiếu</p>
                <p className="">CEO TopCV</p>
              </div>
              <Image src={TopCVLogo} alt="TopCV_Logo" width={50} height={50} className="ml-auto"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
