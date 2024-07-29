import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full px-8 lg:wrapper flex text-gray-100/60 bg-black/40 lg:rounded-xl py-4 items-center justify-between lg:mb-4">
      <span className="text-base font-normal">
        Copyright &copy; {date.getFullYear()} Dani.
      </span>
      <div className="flex space-x-4 text-xl">
        <FaTelegram />
        <FaInstagram />
      </div>
    </div>
  );
};
export default Footer;
