import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="bg-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 text-left border-t border-white-200 pt-6">
            &copy; GetIns Company Limited. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
