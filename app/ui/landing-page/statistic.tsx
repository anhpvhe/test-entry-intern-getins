export default function Statistic() {
  return (
    <div className="p-28 bg-orange-100">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Những con số <span className="text-green-500">ấn tượng</span>
      </h1>
      <div className="flex justify-evenly text-center mx-auto">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">2000+</h1>
          <h2 className="text-gray-500 text-lg">Khách hàng thật</h2>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-4">100+</h1>
          <h2 className="text-gray-500 text-lg">Đối tác đã lựa chọn chúng tôi</h2>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-4">100,000+</h1>
          <h2 className="text-gray-500 text-lg">Chiến dịch đã được khảo sát</h2>
        </div>
      </div>
    </div>
  );
}
