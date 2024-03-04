import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:scale-105 active:scale-100"
    >
      {title}
    </Link>
  );
};

export default NavLink;
