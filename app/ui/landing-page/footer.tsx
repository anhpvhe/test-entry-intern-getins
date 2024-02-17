import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="bg-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end border-t border-white-200 py-6">
            <div className="mt-2 text-left">
              &copy; GetIns Company Limited. All rights reserved.
            </div>
            <div className="flex justify-center">
              <div className="text-right w-3 text-xs mx-2">
              <Link href="https://www.facebook.com" target="blank">
                  <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              </div>
              <div className="text-right w-5 text-xs mx-2">
              <Link href="https://www.instagram.com" target="blank">
                <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
              <div className="text-right w-5 text-xs mx-2">
              <Link href="https://twitter.com" target="blank">
                <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
              <div className="text-right w-5 text-xs mx-2">
              <Link href="https://www.linkedin.com" target="blank">
                <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
