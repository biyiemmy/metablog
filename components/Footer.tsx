import Link from "next/link";
import { SmallLogo } from "./SVG";

type Props = {};

const footItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/archived", label: "Archive" },
  { href: "/author", label: "Author" },
  { href: "/contact", label: "Contact" },
];

const Footer = (props: Props) => {
  return (
    <footer className="mt-24 px-2 sm:px-28 pt-12 pb-4 border-1 dark:border-[#242535] dark:text-[#FFFFFF] bg-[#E8E8EA] dark:bg-[#141624]">
      <div className="sm:grid grid-cols-[289px_100px_100px_392px] gap-[106px]">
        <div className="w-[289px]">
          <h4 className="font-semibold pb-4 text-lg">About</h4>
          <p className="text-gray-600 dark:text-gray-400 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="text-gray-600 text-base dark:text-gray-400">
            <span className="font-semibold">Email :</span>
            <span className="font-normal"> info@jstemplate.net</span>
          </p>
          <p className="text-gray-600 text-base dark:text-gray-400">
            <span className="font-semibold">Phone :</span>
            <span className="font-normal"> 880 123 456 789</span>
          </p>
        </div>

        <div className="w-[100px]">
          <h4 className="font-semibold pb-4 text-lg">Quick Link</h4>
          <ul>
            {footItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[100px]">
          <h4 className="font-semibold pb-4 text-lg">Category</h4>
          <ul>
            {footItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[392px] h-[254px] bg-white dark:bg-[#242535] rounded-xl text-center p-[32px]">
          <h4 className="font-semibold dark:text-[#FFFFFF] text-[#181A2A] text-lg">
            Weekly Newsletter
          </h4>
          <p className="font-normal text-[#696A75] dark:text-[#97989F] mb-2">
            Get blog articles and offers via email
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border dark:bg-[#181A2A] dark:border-[#3B3C4A] dark:border-1 border-gray-300 text-[#696A75] rounded-md mb-2 w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="sm:flex justify-between border-t my-12 pt-12 dark:border-[#242535] border-[#DCDDDF]">
        <div className="sm:flex gap-2">
          <SmallLogo />
          <div className="font-sans text-[#141624]">
            <span className="font-normal">Meta</span>
            <span className="font-extrabold">Blog</span>
            <p className="text-base font-normal text-[#3B3C4A] ">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="sm:flex justify-between items-center text-center gap-4 text-base font-normal">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
