import Image from "next/image";

const Header = () => {
  const navLinks = [
    {
      name: "Works",
      path: "#works",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div className="fixed z-50 top-0 right-0 left-0 h-14">
      <div className="wrapper bg-gray-900 border border-t-0 border-gray-100/15 rounded-b-xl shadow-md  left-auto right-auto flex justify-between items-center h-full px-4 z-50">
        <Image
          alt="Brook"
          src={"/logo.png"}
          width={800}
          height={800}
          className="w-8 h-auto shadow rounded-md"
        />
        <div className="flex space-x-4 mr-1">
          {navLinks.map((item) => (
            <a href={item.path} key={item.name} className="opacity-70">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
