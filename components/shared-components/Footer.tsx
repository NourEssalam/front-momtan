import { contactInfo, footerMenu, socials } from "@/lib/menus";
import { contactInfoType, footerMenuType } from "@/lib/types/menu-types";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const groupedMenu = footerMenu.reduce<Record<string, footerMenuType[]>>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} // initial value
  );

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-white">
      <div className="container flex flex-col justify-center md:items-center gap-16">
        <main
          className=" grid grid-cols-1 gap-x-6 gap-y-12 
      sm:gap-x-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* logo and social */}

          <Link href="/" className=" w-20 mb-4 md:w-28 ">
            <Image
              src="/img/logos/momtan-logo-footer.png"
              alt="logo of the header"
              width="150"
              height="150"
              // fill={true}
              sizes="(max-width: 1200px) 50vw, 33vw"
              className=" object-contain"
              priority={true}
            />
          </Link>

          {/* socials */}
          <ul className="grid grid-cols-4 sm:grid-cols-2  place-self-start gap-8">
            {socials.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.href}
                  className="text-sm  text-grey-medium hover:text-accent transition-colors duration-300"
                >
                  <social.Icon className="w-8 h-8 " />
                </Link>
              </li>
            ))}
          </ul>
          {/* contact */}
          <div className="">
            <h3 className="text-lg text-grey-medium  font-semibold mb-4">
              Contact Us
            </h3>
            <address className="contacts flex flex-col gap-1 ">
              {contactInfo.map((info: contactInfoType) => (
                <Link
                  className={`${
                    info.type === "address" ? "font-medium" : "font-normal"
                  } text-sm lg:text-base inline-block text-grey-light hover:text-accent transition-colors duration-300`}
                  href={!info.link ? "#" : info.link}
                  key={info.value}
                >
                  {info.value}
                </Link>
              ))}
            </address>
          </div>
          {/* quick links */}
          {Object.keys(groupedMenu).map((key) => (
            <div key={key} className=" ">
              <h3 className="text-lg text-grey-medium font-semibold mb-4">
                {key}
              </h3>
              <ul>
                {groupedMenu[key].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm lg:text-base text-grey-light hover:text-accent transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>

        <p className="text-sm iniline-block text-grey-light lg:col-span-3 text-center">
          Copyright &copy; {year} by Momtan, Inc. All right reserved.
        </p>
      </div>
    </footer>
  );
}
